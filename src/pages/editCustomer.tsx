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
import { NavigationScreenProp, NavigationState, } from "react-navigation";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./styles";
import { HeaderLeft } from "../components";
import { customerEdit } from "../redux/actions/customerEditAction";
import { AppState } from '../redux/store'
import { connect } from "react-redux";
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/Ionicons";
import {GetUser} from "../redux/actions/getUserAction"

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  isSuccees: boolean;
  customerEdit: (id: number, nameSurname: string, companyName: string, dayOfWeek: number) => void;
  CustomerEditMessage: string;
  musteri: customerData;
  GetUser: (employeeId: number) => void;
}

interface customerData {
  musteriAdiSoyadi: string;
  sirketAdi: string;
}

const girdiler = Yup.object().shape({
  musteriAdiSoyadi: Yup.string()
    .matches(/./g)
    .min(1)
    .max(30)
    .required(),
  sirketAdi: Yup.string()
    .matches(/./g)
    .min(1)
    .max(30)
    .required(),
});

interface State {
  dayOfWeek: number;
}
class editCustomer extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      dayOfWeek: 0
    };
  }

  handleAlert() {
    Alert.alert(
      //title
      'Müşteri Düzenlendi!',
      //body
      '',
      [
        { text: 'Tamam' }
      ],
      { cancelable: false }
    );
    this.props.navigation.navigate("Customer");
  }

  handleEditCustomer(values: customerData) {
    const { customerEdit, isSuccees, navigation } = this.props;
    customerEdit(this.props.navigation.getParam("customerId"), values.musteriAdiSoyadi, values.sirketAdi, this.state.dayOfWeek);
    this.handleAlert();
  };

  _setStateDayOfWeek(value:any){
    this.setState({ dayOfWeek: value })

  }

  render() {
    const { navigation } = this.props;

    var musteriAdiSoyadi: string = this.props.navigation.getParam("nameSurname");
    var sirketAdi: string = this.props.navigation.getParam("companyName");
    var dayOfWeek1: number = this.props.navigation.getParam("dayofWeekCustomer");
    var dayOfWeekValue: number = 0;
    if (dayOfWeek1 != null) {
      dayOfWeekValue = +dayOfWeek1;

    }
    else {

    }
    var days: string[] = [];
    days.push("Tümü");
    days.push("Pazartesi");
    days.push("Salı");
    days.push("Çarşamba");
    days.push("Perşembe");
    days.push("Cuma");
    days.push("Cumartesi");
    days.push("Pazar");
    const placeHolderDay = {
      label: days[dayOfWeekValue],
      value: dayOfWeekValue,
      color: '#2B6EDC',
    }

    return (
      <View style={styles.addCustomerContainer}>
        <StatusBar backgroundColor="#2B6EDC" />
        <HeaderLeft
          title="Müşteri Bilgilerini Düzenle"
          leftButtonPress={() => this.props.navigation.navigate("Customer")}
        />

        <View style={{ marginBottom: 30 }}></View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView bounces={false}>
            <Formik
              initialValues={{ musteriAdiSoyadi, sirketAdi }}
              validationSchema={girdiler}
              onSubmit={values => this.handleEditCustomer(values)}
            >
              {props => {
                return (
                  <View>
                    <View style={styles.inputContainer}>
                      <Text>Adı Soyadı</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Adı Soyadı"
                        placeholderTextColor="#9A9A9A"
                        value={props.values.musteriAdiSoyadi}
                        autoCapitalize="words"
                        onChangeText={props.handleChange("musteriAdiSoyadi")}
                        onBlur={props.handleBlur("musteriAdiSoyadi")}
                      />
                      <Text>Şirket Adı</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Şirket Adı"
                        placeholderTextColor="#9A9A9A"
                        value={props.values.sirketAdi}
                        autoCapitalize="words"
                        onChangeText={props.handleChange("sirketAdi")}
                        onBlur={props.handleBlur("sirketAdi")}

                      />
                      <View style={styles.rnpickerselect}>
                        <RNPickerSelect
                          style={styles.pickerSelectStyles}
                          placeholder={placeHolderDay}
                          onValueChange={(value) => this._setStateDayOfWeek(value)}
                          items={[
                            { label: 'Tümü', value: 0 },
                            { label: 'Pazartesi', value: 1 },
                            { label: 'Salı', value: 2 },
                            { label: 'Çarşamba', value: 3 },
                            { label: 'Perşembe', value: 4 },
                            { label: 'Cuma', value: 5 },
                            { label: 'Cumartesi', value: 6 },
                            { label: 'Pazar', value: 7 },
                          ]}
                          textInputProps={{ underlineColor: 'yellow' }}
                          Icon={() => {
                            return <Icon name="md-arrow-down" size={24} color="gray" style={{ top: 15 }} />;
                          }}
                        />
                      </View>
                      <TouchableOpacity
                        style={styles.customerEditButton}
                        onPress={props.handleSubmit}>
                        <Text style={styles.CustomerEditButtonText}>Düzenle</Text>
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

const mapStateToProps = (state: AppState) => ({
  isSuccees: state.customerEdit.isSuccess,
  CustomerEditMessage: state.customerEdit.CustomerEditMessage
})

function bindToAction(dispatch: any) {
  return {
    customerEdit: (id: number, nameSurname: string, companyName: string, dayOfWeek: number) =>
      dispatch(customerEdit(id, nameSurname, companyName, dayOfWeek)),
      GetUser: (employeeId: number)=>
      dispatch(GetUser(employeeId)),
  };
}

export default connect(mapStateToProps, bindToAction)(editCustomer);