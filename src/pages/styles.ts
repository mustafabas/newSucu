import { StyleSheet, Button } from "react-native";
import { colors } from "../constants";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    justifyContent: "flex-start",
    
  },
  addCustomerContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
  },

  headStyle: {
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  headText: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginHorizontal: 5,
    paddingHorizontal: 45,
    borderRadius: 2000,
    color: '#ffffff',
    marginBottom:10,
    
  },
  inputContainer: {
    elevation:5,
    borderRadius:2,
    paddingTop:30,
    marginHorizontal:20,
    justifyContent: "space-between",
    padding: 20,
    flex:4,
  },
  signupLink: {
    flexDirection: "row",
    justifyContent: "center"
  },
  background: {
    backgroundColor: "#A1A9EF",
  },
  input: {
    elevation:2,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginHorizontal: 5,
    paddingHorizontal: 20,
    color: 'black',
    marginBottom:10,
    borderRadius:4,
    borderColor:"white"
  },
  inputFiyat: {
    elevation:2,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginHorizontal: 5,
    paddingHorizontal: 20,
    color: 'black',
    marginBottom:10,
    borderRadius:4,
    borderColor:"white",
    flex:8,
    flexDirection:"column",
  },

  inputFiyatText: {
    flex:1,
    flexDirection:"column",
    textAlign:"center",
    marginTop:12,
    paddingRight:10,
    fontSize:20,
    fontWeight:"bold",
  },

  inputFiyatContainer:{
    flexDirection:"row",
  },

  logoContainer:{
    alignItems:"center",
    flexGrow:1,
    justifyContent:"center",
  },
  logo:{
    width:100,
    height:100,
  },
  buttonContainer:{
    backgroundColor:'#D2D5F1',

    marginHorizontal: 20,
    paddingVertical: 15,
    marginBottom:10,
  },
  customerAddButton:{
    backgroundColor:'#2B6EDC',

    marginHorizontal: 20,
    paddingVertical: 15,
    marginTop:5,
    marginBottom:10,
    marginLeft:200,
  },

  ProductAddButton:{
    backgroundColor:'#2B6EDC',

    marginHorizontal: 20,
    paddingVertical: 15,
    marginTop:5,
    marginBottom:10,
    marginLeft:200,
  },

  customerEditButton:{
    backgroundColor:'#2B6EDC',
    marginHorizontal: 20,
    paddingVertical: 15,
    marginTop:5,
    marginBottom:10,
    marginLeft:200,
  },

  CustomerAddButtonText:{
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize:16,
  },

  ProductAddButtonText:{
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize:16,
  },

  CustomerEditButtonText:{
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize:16,
  },
  
  linkText: {
    textAlign: "center",
    color: "#C2C8F7",
    fontWeight: "900",
    marginHorizontal: 120,
    paddingVertical: 15,
    
  },

  flatContainer:{
    flex:1,
  },

  item: {
    backgroundColor: '#B5BAEA',
    padding: 20,
    marginVertical: 2,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 32,
    color: "white",

  },

  row: {
    elevation: 6.5,
    borderRadius: 10,
    backgroundColor: "white",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 18,
    paddingRight: 16,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 5,
    marginBottom: 5,
  },

  row_cell1: {
    flex: 1,
    flexDirection: 'column',
    marginBottom:10,
    marginTop:10,
  },

  row_cell2: {
    flex: 1,
    flexDirection: 'column',
    marginBottom:10,
    marginTop:10,
  },

  row_cell3:{
    flex: 1,
    flexDirection: "row",
    marginBottom:10,
    marginTop:10,
  },

  row_cell4: {
    flexDirection: "column",
    flex:1,
    marginLeft:5,
  },
  row_cell5: {
    flexDirection: 'row',
    flex:7,
  },
  customerDetailHeader1: {
    flex: 0.4,
    flexDirection: 'column',

  },
  customerDetailHeader2: {
    flex:0.1,
    flexDirection: 'column',
    justifyContent:'center'
  },
  customerDetailHeader3: {
    flex: 0.5,
    flexDirection: 'row',
  },
  customerDetailHeader4:{
    flex: 0.4,
    flexDirection: 'column',
    justifyContent:'flex-start'
  },
  customerDetailHeaderButtonText:{
    color: "#1E1E1E",
    fontSize:40,
  },

  tikla: {
    color: "#131843",
    paddingLeft: 16,
    flex: 0,
    fontSize: 24,
  },
  musteri_adi: {
    color: "#333",
    textAlignVertical: 'bottom',
    includeFontPadding: false,
    flex: 0,
    fontSize: 20,
  },
  alt_bilgi: {
    color: "#0A157A",
    textAlignVertical: 'top',
    includeFontPadding: false,
    flex: 0,
    fontSize: 10,
  },
  paratextalınan: {
    color: "green",
    textAlignVertical: 'top',
    includeFontPadding: false,
    flex: 0,
    fontSize: 15,
    textAlign: "right",
  },
  paratextalınanDetail: {
    color: "green",
    textAlignVertical: 'top',
    includeFontPadding: false,
    flex: 0,
    fontSize: 15,
  },
  paratextkalan: {
    color: "#E30606",
    textAlignVertical: 'top',
    includeFontPadding: false,
    flex: 0,
    fontSize: 15,
    textAlign: "right",
  },
  paratextkalanDetail: {
    color: "#E30606",
    includeFontPadding: false,
    flex: 0,
    fontSize: 15,
  },
  paratextToplam: {
    color: "black",
    textAlignVertical: 'top',
    includeFontPadding: false,
    flex: 0,
    fontSize: 15,
    textAlign: "right",
  },
  paratextToplamDetail: {
    color: "black",
    includeFontPadding: false,
    fontSize: 15,
    flexDirection:'column',
    justifyContent:'flex-end',
    alignSelf:'center',
    flex:1
  },
  detay_bilgi: {
    color: "#0A157A",
    textAlignVertical: 'top',
    includeFontPadding: false,
    flex: 0,
    fontSize: 15,
  },
  orderContainer: {
    elevation: 6.5,
    borderRadius: 10,
    backgroundColor: "white",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 18,
    paddingRight: 16,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 5,
    marginBottom: 5,
  },
  urunAdiText:{
    textAlignVertical: 'bottom',
    color: "#08147E",
    includeFontPadding: false,
    flex: 2,
    fontSize: 20,
  },
  tarihText:{
    textAlign:"right",
    color: "#946C4D",
    includeFontPadding: false,
    flex: 1.2,
    fontSize: 13,
    paddingRight:12,
    marginTop:5,
  },
  urunAdetText:{
    textAlign:"left",
    color: "#C4B47B",
    includeFontPadding: false,
    flex:0.8,
    fontSize: 12,
  },
  birimFiyatText:{
    textAlign:"left",
    color: "#C4B47B",
    includeFontPadding: false,
    flex:0.8,
    fontSize: 12,
  },
  toplamFiyatText:{
    textAlign:"right",
    color: "#4B3A3A",
    includeFontPadding: false,
    flex:1.1,
    fontSize: 12,
    fontWeight:"bold",
  },

  searchInput:{
    elevation:2,
    backgroundColor: '#E2E7F5',
    marginHorizontal: 10,
    marginLeft:15,
    paddingHorizontal: 20,
    color: 'black',
    marginBottom:10,
    borderRadius:2,
    flex:5,
    flexDirection: "column",
  },

  searchButton:{
    backgroundColor:'#2B6EDC',
    borderRadius: 2000,
    marginHorizontal: 10,
    paddingVertical: 8,
    marginBottom:5,
    marginLeft:0,
    flexDirection: 'column',
    flex:1.5,
    alignItems:"center",
  },

  search_row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  order_ustbilgi_row: {
    paddingLeft:10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'#fff'
  },

  iconButtonCustomer: {
    marginHorizontal: 2,
    paddingLeft:16,
    flex:0.5,
    textAlign:"right",
  },
  iconButtonOrder: {
    marginHorizontal: 2,
    paddingLeft:16,
    flex:0.1,
    textAlign:"right",
  },


  modalContainer: {
    margin:32,
    padding: 6,
    backgroundColor: '#efefef',
    top:320,
    left: 20,
    right: 20,
    alignItems: 'center',
    position: "absolute",
  },
  innerContainer: {
    alignItems: 'center',
  },

  modalEditButtonContainer:{
    backgroundColor:'#FFFFFF',
    paddingHorizontal:43,
    margin:1,
    borderRadius: 5,
  },

  modalEditButtonText:{
    textAlign: "center",
    color: "#6E6E6E",
    fontWeight: "900",
    paddingVertical: 10,
    marginHorizontal:10,   
  },

  modalAddCashButtonText:{
    textAlign: "center",
    color: "#62C463",
    fontWeight: "900",
    paddingVertical: 10,
    marginHorizontal:10,   
  },

  modalDeleteButtonContainer:{
    backgroundColor:'#FFFFFF',
    paddingHorizontal:61,
    margin:1,
    borderRadius: 5,
  },

  modalDeleteButtonText:{
    textAlign: "center",
    color: "#B80202",
    fontWeight: "900",
    paddingVertical: 10,
    marginHorizontal:10,   
  },

  modalCancelButtonContainer:{
    left:120,
    paddingHorizontal:10,
  },

  logoutButtonContainer:{
    backgroundColor:'#D60D0D',
    paddingHorizontal:61,
    margin:5,
    borderRadius: 5,
    flex:1,
    justifyContent:"flex-end"
  },

  logoutButtonText:{
    textAlign: "center",
    color: "#F3CCCC",
    fontWeight: "900",
    fontSize:17,
    paddingVertical: 17,
    marginHorizontal:10,
  },

  settingsContainer:{
    flex:10
  },

  addProductButtonContainer:{
    backgroundColor:'#2B6EDC',
    paddingHorizontal:61,
    margin:5,
    borderRadius: 5,
    justifyContent:"flex-start",
    flex:0.1,

  },
  addProductButtonText:{
    textAlign: "center",
    color: "white",
    fontWeight: "900",
    fontSize:17,
    paddingVertical: 17,
    marginHorizontal:10,
  },

  errorText:{
    marginLeft:10,
    marginBottom:10,
    textAlign: "justify",
    color:"#EA0808",
    fontSize:12,
  },

  amountButtonContainer:{
    backgroundColor:'#2B6EDC',
    borderRadius: 10,
    marginHorizontal: 30,
    paddingVertical: 10,
    marginTop:5,
    marginBottom:22,
    marginLeft:200,
    right:10,
    alignItems:"center",

  },

  amountButtonText:{
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize:16,

  },

  modalOrderButtonContainer:{
    backgroundColor:'#FFFFFF',
    paddingHorizontal:31,
    margin:1,
    borderRadius: 5,
  },

  alınanParaText:{
    textAlign:"center",
    color: "green",
    includeFontPadding: false,
    flex:1,
    fontSize: 12,
  },

  kalanParaText:{
    textAlign:"center",
    color: "#E30606",
    includeFontPadding: false,
    flex:1,
    fontSize: 12,
    fontWeight:"bold",
  },

  pickerSelectStyles:{
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  chechBoxContainer: {
    elevation:2,
    borderRadius:2,
    marginHorizontal:20,
    justifyContent: "space-between",
    flex:4,
  },

  productUrunfiyatText: {
    color: "#0A157A",
    textAlignVertical: 'top',
    includeFontPadding: false,
    flex: 0,
    fontSize: 12,
    textAlign: "right",
  },

  wantedCustomerGetButtonContainer:{
    backgroundColor:'#2B6EDC',
    borderRadius: 4,
    marginHorizontal: 5,
    paddingVertical: 8,
    marginBottom:5,
    flexDirection: 'column',
    flex:1,
    alignItems:"center",
  },
  wantedCustomerGetText:{
    color: "white",
    includeFontPadding: false,
    fontSize: 15,
    textAlign: "right",
  },

  modalPriceYeniPriceButtonContainer:{
    backgroundColor:'#FFFFFF',
    paddingHorizontal:19,
    margin:1,
    borderRadius: 5,
  },

  modalPriceYeniPriceButtonText:{
    textAlign: "center",
    color: "#9AB055",
    fontWeight: "900",
    paddingVertical: 10,
    marginHorizontal:10,   
  },

  modalPriceTanimliFiyatButtonContainer:{
    backgroundColor:'#FFFFFF',
    paddingHorizontal:12,
    margin:1,
    borderRadius: 5,
  },

  modalPriceTanimliFiyatButtonText:{
    textAlign: "center",
    color: "#B0AA55",
    fontWeight: "900",
    paddingVertical: 10,
    marginHorizontal:10,   
  },

  modalPriceContainer: {
    margin:32,
    padding: 6,
    backgroundColor: '#efefef',
    top:100,
    left: 20,
    right: 20,
    alignItems: 'center',
    position: "absolute",
  },

  siparisButtonContainer:{
    backgroundColor:'#2B6EDC',
    borderRadius: 2000,
    marginHorizontal: 20,
    paddingVertical: 15,
    marginBottom:10,
  },

  newPriceButtonContainer:{
    backgroundColor:'#2B6EDC',
    borderRadius: 2000,
    marginHorizontal: 20,
    paddingVertical: 15,
    marginBottom:10,
  },

  maasText: {
    color: "#853614",
    textAlignVertical: 'top',
    includeFontPadding: false,
    flex: 0,
    fontSize: 12,
    textAlign: "right",
  },

  userAddContiner: {
    margin:10,
    elevation:2,
    borderRadius:2,
    paddingTop:30,
    marginHorizontal:20,
    justifyContent: "space-between",
    padding: 20,
    flex:4,
  },

  addUserInfoText: {
    color: "#0A157A",
    textAlignVertical: 'top',
    includeFontPadding: false,
    flex: 0,
    fontSize: 10.5,
  },

  iconButtonOrderCustomer: {
  },

  rnpickerselect: {
    elevation:2,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginHorizontal: 5,
    paddingHorizontal: 20,
    color: 'black',
    marginBottom:10,
    borderRadius:4,
    borderColor:"white",
    flex:1
  },

  musteribulunamadiContainer: {
    backgroundColor:"#ECDF0A",
    margin:10,
    elevation:2,
    borderRadius:2,
    paddingTop:20,
    marginHorizontal:20,
    justifyContent: "space-between",
    padding: 20,

  },

  musteribulunamadiText: {
    color: "#686204",
    textAlignVertical: 'top',
    includeFontPadding: false,
    flex: 0,
    fontSize: 15,
  }






});

export default styles;