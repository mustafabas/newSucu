import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./styles";
import { HeaderLeft } from "../components";
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import { AppState } from "../redux/store";
import { GetProducts } from "../redux/actions/productAction";
import { IProductItem } from "../redux/models/productAddModel";
import { AddOrder } from "../redux/actions/addOrderAction";
import { IAddOrderItem } from "../redux/models/addOrderModel";
import {GetProduct} from "../redux/actions/productForCustomerAction";
import { IProductForCustomerItem } from "../redux/models/productForCustomerModel";

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  isProductLoading : boolean;
  products : IProductItem[];
  GetProducts : () => void;
  AddOrder : (productId:number, customerId:number,unitPrice:number, count:number)=>void;
  isSuccees : boolean;
  AddOrderMessage: string;
  GetProduct : (productId:number,customerId:number) => void;
  product: IProductForCustomerItem;
}

interface State {
  productName:string,
  productCode:string,
  unitPrice:string,
  date:string,
  productId:number,
  count:string,
  isSuccess: boolean,
}

interface Item {
  label: string;
  value: any;
  key?: string | number;
  color?: string;
}

interface input{
  count:string,
  unitPrice:string,
}

const girdiler = Yup.object().shape({
  count: Yup.number()
  .positive()
  .required(),
  unitPrice: Yup.number()
  .positive()
  .required()
  .moreThan(0),
});
class addOrder extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      productId:0,
      productName:"",
      productCode:"",
      unitPrice:"",
      date:"",
      count:"",
      isSuccess:false,
    };
  }

  componentDidUpdate(){}

  handleAlert(){
      this.props.navigation.navigate("OrdersCustomer");
      Alert.alert(
        //title
        'Yeni Sipariş Oluşturuldu!',
        //body
        '',
        [
          {text: 'Tamam'}
        ],
        { cancelable: false }
      );      
  }

  siparisOlustur(values:input){
    const { AddOrder, navigation, isSuccees } = this.props;
    var customerId = navigation.getParam("customerId");
    console.log(isSuccees+" before")
    AddOrder(this.state.productId, customerId, Number(values.unitPrice),Number(values.count));
    this.componentDidUpdate();
    this.componentDidUpdate();
    this.handleAlert()
    console.log(isSuccees+" after")
  }

  OrderInfo(productId:number){
    this.setState({
      productId: productId,
    });
    this.props.GetProduct(productId,this.props.navigation.getParam("customerId"));

  }
  
  PickerMenuCreate(){
    var PickerModel :Item[] = [];
      
      this.props.products.forEach((product:IProductItem) => {
            var productItem : Item={
                label : product.productName,
                value :product.productId,
            }
            PickerModel.push(productItem);         
      });

      return PickerModel;
  }

  componentWillMount() {
    this.props.GetProducts();
    var dateAta:string;
    var date = new Date();

    console.log(date);
    dateAta = date.toLocaleDateString()+" "+date.toLocaleTimeString();
    this.setState({date:dateAta});
    
  }

  render() {
    const initialValues:input={
      count:this.state.count,
      unitPrice:String(this.props.product.unitPrice),
    }

    const placeholder = {
      label: 'Ürün Seçiniz...',
      value: '',
      color: '#2B6EDC',
    };

    return (
      <View style={styles.addCustomerContainer}>
        <StatusBar backgroundColor="#2B6EDC"/>
        <HeaderLeft
          title="Sipariş Ekle"
          leftButtonPress={() => this.props.navigation.navigate("OrdersCustomer")}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView bounces={false}>      
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={girdiler}
              onSubmit={values => this.siparisOlustur(values)}
            >
              {props => {
                return (
                  <View>
                    <View>
                    </View>
                    <View style={styles.inputContainer}>
                    <View style={styles.input}>
                    <RNPickerSelect
                      style={styles.pickerSelectStyles}
                      placeholder={placeholder}
                      onValueChange={(value) => this.OrderInfo(value)}
                      items={this.PickerMenuCreate()}
                      textInputProps={{ underlineColor: 'yellow' }}
                      Icon={() => {
                        return <Icon name="md-arrow-down" size={24} color="gray" style={{top:15}} />;
                      }}
                    />
                    </View>
                      <Text>Ürün Adedi:</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Ürün Adedi"
                        placeholderTextColor="#9A9A9A"
                        keyboardType="number-pad"
                        value={props.values.count}
                        onChangeText={props.handleChange("count")}
                        onBlur={props.handleBlur("count")}
                      />
                      <TextInput
                        editable={false}
                        style={styles.input}
                        placeholderTextColor="#313033"
                        value={this.state.date}
                      />
                      <Text>Ürün Kodu:</Text>
                      <TextInput
                        editable={false}
                        style={styles.input}
                        placeholderTextColor="#313033"
                        value={this.props.product.productCode}       
                      />
                      <Text>Birim Fiyat:</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Ürün Adedi"
                        placeholderTextColor="#9A9A9A"
                        keyboardType="number-pad"
                        value={String(props.values.unitPrice)}
                        onChangeText={props.handleChange("unitPrice")}
                        onBlur={props.handleBlur("unitPrice")}     
                      />
                      <TextInput
                        editable={false}
                        style={styles.input}
                        placeholderTextColor="#313033"
                        value={"Toplam Tutar: "+(Number(props.values.unitPrice)*Number(props.values.count))+" TL"}       
                      />
                      <TouchableOpacity style={styles.siparisButtonContainer}>
                        <Text style={styles.amountButtonText}
                        onPress={props.handleSubmit}
                        >Sipariş Ekle</Text>
                      </TouchableOpacity>

                    </View>
                  </View>
                );
              }}
            </Formik>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapStateToProps = (state : AppState) => ({
  isProductLoading : state.products.isProductLoading,
  products : state.products.products,
  isSuccees: state.addOrder.isSuccess,
  product: state.productForCustomer.product,
})
function bindToAction(dispatch: any) {
  return {
    GetProducts: () =>
    dispatch(GetProducts()),
    AddOrder: (productId:number, customerId:number, unitPrice:number, count:number) =>
    dispatch(AddOrder(productId, customerId, unitPrice,count)),
    GetProduct: (productId:number,customerId:number) =>
    dispatch(GetProduct(productId,customerId)), 
  };
}

export default connect(
  mapStateToProps,
  bindToAction
)(addOrder);