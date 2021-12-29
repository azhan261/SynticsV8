import React from 'react'
import { Formik, FormikConsumer, useFormik } from 'formik'
import { useHistory } from "react-router-dom";
//import { createContacts } from '../Apis/apiForContactUs';
import { createContacts } from '../Apis/apiForContactUs';
import ModalWorkingForAudioRecord from '../Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/Audio Recording For Contact Us/ModalWorkingForAudioRecord'
import ModalTest from "../Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/Modals/ModalTest"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import '../Sass.scss'


function Contact() {
 /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const history = useHistory()
  
  const onSubmit = async (data) => {
    console.log(data)
    await createContacts(data)
    debugger
    //redirecting 
    //history.push("/")
  };

    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            country_code:'',
            phone:'',
            message:''
            
        },

        //4 Make onSubmit propert to handle what happens to data on form submisison

        onSubmit: values => {

          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")

          onSubmit(formik.values)

        },

        //5 Make validation property

        validate: values => {
            
            let errors = {}

            const letters = /^[A-Za-z ]+$/;

            const cnic = /^[0-9--]+$/;

            const phone = /^[0-9]+$/;

            const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
            
            if(!values.name){
                errors.name = "Please fill in Name"
            }else if (!letters.test(values.name)) {
                errors.name = "Please enter a valid Name"
            }

          if(!values.phone){
              errors.phone = "Please enter your contact number"
          }else if (!phone.test(values.phone)) {
              errors.phone = "Please enter a valid contact number"
          }

            if(values.conf_pass != values.password){
                errors.conf_pass = "Your password does not match"
            }

            if(!values.email){
                errors.email = "Please fill in Email"
            }

            
            
            return errors


        }


    })

    console.log("Form errors", formik.errors)
    return (
        <div>            
          {/* <i class="fas fa-info-circle"></i> */}
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <br /><br />
                <h2 className="mt-5">Contact Us</h2>
                <p>For any quries, feel free to use the methods below to send us and your questions and we will be more than happy to help out!</p>
                </div>
                <div className="row">
                        <div className="col-lg-6 info">
                        <i className="bx bx-map" />
                        <h4>Address</h4>
                        <p>Model Town,<br />Lahore, Pakistan</p>
                        </div>
                        <div className="col-lg-6 info">
                        <i className="bx bx-phone" />
                        <h4>Call Us</h4>
                        <p>+923324079262</p>
                        </div>
                        <div className="col-lg-6 info">
                        <i className="bx bx-envelope" />
                        <h4>Email Us</h4>
                        <p>azlan@syntics.co<br /></p>
                        </div>
                        <div className="col-lg-6 info">
                        <i className="bx bx-time-five" />
                        <h4>Working Hours</h4>
                        <p>Mon - Fri: 9AM to 5PM<br />Sunday: 9AM to 1PM</p>
                        </div>
                    </div>
                <div className="row mt-5">
                    <div className="col-lg-12">
                    
                    
                    </div>
                    <div>
                    {/*}
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form" data-aos="fade-up">
                        <div className="form-group">
                        <input placeholder="Your Name" type="text" name="name" className="form-control" id="name" required />
                        </div>
                        <div className="form-group mt-3">
                        <input placeholder="Your Email" type="email" className="form-control" name="email" id="email" required />
                        </div>
                        <div className="form-group mt-3">
                        <input placeholder="Subject" type="text" className="form-control" name="subject" id="subject" required />
                        </div>
                        <div className="form-group mt-3">
                        <textarea placeholder="Message" className="form-control" name="message" rows={5} required defaultValue={""} />
                        </div>
                        <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                     */}
                      <form   className="php-email-form" data-aos="fade-up" onSubmit={formik.handleSubmit}>
                        <div className="row">
                          <div className="col-md-3"></div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor>Full Name*</label>
                              {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                              <input type="text" name="name" placeholder="Enter your full name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} className="h-25 form-control"  />
                              {formik.errors.name && formik.touched.name ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.name}</div>) : null}
                          </div>
                            <div className="form-group mt-3">
                                <label htmlFor>Email Address*</label>
                                <input type="email" name="email" placeholder="Enter your email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className="h-25 form-control"  />
                                {formik.touched.email ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.email}</div>) : null}
                            </div>
                            <div className="form-group mt-3">
                              <label htmlFor>Country Code</label>
                              <select name="country_code" onChange={formik.handleChange} /*onBlur={formik.handleBlur} */ value={formik.values.country_code} className="form-control rounded-0" required>
                                <option value = "countryCode">Country Code</option>
                                <option data-countryCode="DZ" value="+213">Algeria (+213)</option>
                                <option data-countryCode="AD" value="+376">Andorra (+376)</option>
                                <option data-countryCode="AO" value="+244">Angola (+244)</option>
                                <option data-countryCode="AI" value="+1264">Anguilla (+1264)</option>
                                <option data-countryCode="AG" value="+1268">Antigua &amp; Barbuda (+1268)</option>
                                <option data-countryCode="AR" value="+54">Argentina (+54)</option>
                                <option data-countryCode="AM" value="+374">Armenia (+374)</option>
                                <option data-countryCode="AW" value="+297">Aruba (+297)</option>
                                <option data-countryCode="AU" value="+61">Australia (+61)</option>
                                <option data-countryCode="AT" value="+43">Austria (+43)</option>
                                <option data-countryCode="AZ" value="+994">Azerbaijan (+994)</option>
                                <option data-countryCode="BS" value="+1242">Bahamas (+1242)</option>
                                <option data-countryCode="BH" value="+973">Bahrain (+973)</option>
                                <option data-countryCode="BD" value="+880">Bangladesh (+880)</option>
                                <option data-countryCode="BB" value="+1246">Barbados (+1246)</option>
                                <option data-countryCode="BY" value="+375">Belarus (+375)</option>
                                <option data-countryCode="BE" value="+32">Belgium (+32)</option>
                                <option data-countryCode="BZ" value="+501">Belize (+501)</option>
                                <option data-countryCode="BJ" value="+229">Benin (+229)</option>
                                <option data-countryCode="BM" value="+1441">Bermuda (+1441)</option>
                                <option data-countryCode="BT" value="+975">Bhutan (+975)</option>
                                <option data-countryCode="BO" value="+591">Bolivia (+591)</option>
                                <option data-countryCode="BA" value="+387">Bosnia Herzegovina (+387)</option>
                                <option data-countryCode="BW" value="+267">Botswana (+267)</option>
                                <option data-countryCode="BR" value="+55">Brazil (+55)</option>
                                <option data-countryCode="BN" value="+673">Brunei (+673)</option>
                                <option data-countryCode="BG" value="+359">Bulgaria (+359)</option>
                                <option data-countryCode="BF" value="+226">Burkina Faso (+226)</option>
                                <option data-countryCode="BI" value="+257">Burundi (+257)</option>
                                <option data-countryCode="KH" value="+855">Cambodia (+855)</option>
                                <option data-countryCode="CM" value="+237">Cameroon (+237)</option>
                                <option data-countryCode="CA" value="+1">Canada (+1)</option>
                                <option data-countryCode="CV" value="+238">Cape Verde Islands (+238)</option>
                                <option data-countryCode="KY" value="+1345">Cayman Islands (+1345)</option>
                                <option data-countryCode="CF" value="+236">Central African Republic (+236)</option>
                                <option data-countryCode="CL" value="+56">Chile (+56)</option>
                                <option data-countryCode="CN" value="+86">China (+86)</option>
                                <option data-countryCode="CO" value="+57">Colombia (+57)</option>
                                <option data-countryCode="KM" value="+269">Comoros (+269)</option>
                                <option data-countryCode="CG" value="+242">Congo (+242)</option>
                                <option data-countryCode="CK" value="+682">Cook Islands (+682)</option>
                                <option data-countryCode="CR" value="+506">Costa Rica (+506)</option>
                                <option data-countryCode="HR" value="+385">Croatia (+385)</option>
                                <option data-countryCode="CU" value="+53">Cuba (+53)</option>
                                <option data-countryCode="CY" value="+90392">Cyprus North (+90392)</option>
                                <option data-countryCode="CY" value="+357">Cyprus South (+357)</option>
                                <option data-countryCode="CZ" value="+42">Czech Republic (+42)</option>
                                <option data-countryCode="DK" value="+45">Denmark (+45)</option>
                                <option data-countryCode="DJ" value="+253">Djibouti (+253)</option>
                                <option data-countryCode="DM" value="+1809">Dominica (+1809)</option>
                                <option data-countryCode="DO" value="+1809">Dominican Republic (+1809)</option>
                                <option data-countryCode="EC" value="+593">Ecuador (+593)</option>
                                <option data-countryCode="EG" value="+20">Egypt (+20)</option>
                                <option data-countryCode="SV" value="+503">El Salvador (+503)</option>
                                <option data-countryCode="GQ" value="+240">Equatorial Guinea (+240)</option>
                                <option data-countryCode="ER" value="+291">Eritrea (+291)</option>
                                <option data-countryCode="EE" value="+372">Estonia (+372)</option>
                                <option data-countryCode="ET" value="+251">Ethiopia (+251)</option>
                                <option data-countryCode="FK" value="+500">Falkland Islands (+500)</option>
                                <option data-countryCode="FO" value="+298">Faroe Islands (+298)</option>
                                <option data-countryCode="FJ" value="+679">Fiji (+679)</option>
                                <option data-countryCode="FI" value="+358">Finland (+358)</option>
                                <option data-countryCode="FR" value="+33">France (+33)</option>
                                <option data-countryCode="GF" value="+594">French Guiana (+594)</option>
                                <option data-countryCode="PF" value="+689">French Polynesia (+689)</option>
                                <option data-countryCode="GA" value="+241">Gabon (+241)</option>
                                <option data-countryCode="GM" value="+220">Gambia (+220)</option>
                                <option data-countryCode="GE" value="+7880">Georgia (+7880)</option>
                                <option data-countryCode="DE" value="+49">Germany (+49)</option>
                                <option data-countryCode="GH" value="+233">Ghana (+233)</option>
                                <option data-countryCode="GI" value="+350">Gibraltar (+350)</option>
                                <option data-countryCode="GR" value="+30">Greece (+30)</option>
                                <option data-countryCode="GL" value="+299">Greenland (+299)</option>
                                <option data-countryCode="GD" value="+1473">Grenada (+1473)</option>
                                <option data-countryCode="GP" value="+590">Guadeloupe (+590)</option>
                                <option data-countryCode="GU" value="+671">Guam (+671)</option>
                                <option data-countryCode="GT" value="+502">Guatemala (+502)</option>
                                <option data-countryCode="GN" value="+224">Guinea (+224)</option>
                                <option data-countryCode="GW" value="+245">Guinea - Bissau (+245)</option>
                                <option data-countryCode="GY" value="+592">Guyana (+592)</option>
                                <option data-countryCode="HT" value="+509">Haiti (+509)</option>
                                <option data-countryCode="HN" value="+504">Honduras (+504)</option>
                                <option data-countryCode="HK" value="+852">Hong Kong (+852)</option>
                                <option data-countryCode="HU" value="+36">Hungary (+36)</option>
                                <option data-countryCode="IS" value="+354">Iceland (+354)</option>
                                <option data-countryCode="IN" value="+91">India (+91)</option>
                                <option data-countryCode="ID" value="+62">Indonesia (+62)</option>
                                <option data-countryCode="IR" value="+98">Iran (+98)</option>
                                <option data-countryCode="IQ" value="+964">Iraq (+964)</option>
                                <option data-countryCode="IE" value="+353">Ireland (+353)</option>
                                <option data-countryCode="IL" value="+972">Israel (+972)</option>
                                <option data-countryCode="IT" value="+39">Italy (+39)</option>
                                <option data-countryCode="JM" value="+1876">Jamaica (+1876)</option>
                                <option data-countryCode="JP" value="+81">Japan (+81)</option>
                                <option data-countryCode="JO" value="+962">Jordan (+962)</option>
                                <option data-countryCode="KZ" value="+7">Kazakhstan (+7)</option>
                                <option data-countryCode="KE" value="+254">Kenya (+254)</option>
                                <option data-countryCode="KI" value="+686">Kiribati (+686)</option>
                                <option data-countryCode="KP" value="+850">Korea North (+850)</option>
                                <option data-countryCode="KR" value="+82">Korea South (+82)</option>
                                <option data-countryCode="KW" value="+965">Kuwait (+965)</option>
                                <option data-countryCode="KG" value="+996">Kyrgyzstan (+996)</option>
                                <option data-countryCode="LA" value="+856">Laos (+856)</option>
                                <option data-countryCode="LV" value="+371">Latvia (+371)</option>
                                <option data-countryCode="LB" value="+961">Lebanon (+961)</option>
                                <option data-countryCode="LS" value="+266">Lesotho (+266)</option>
                                <option data-countryCode="LR" value="+231">Liberia (+231)</option>
                                <option data-countryCode="LY" value="+218">Libya (+218)</option>
                                <option data-countryCode="LI" value="+417">Liechtenstein (+417)</option>
                                <option data-countryCode="LT" value="+370">Lithuania (+370)</option>
                                <option data-countryCode="LU" value="+352">Luxembourg (+352)</option>
                                <option data-countryCode="MO" value="+853">Macao (+853)</option>
                                <option data-countryCode="MK" value="+389">Macedonia (+389)</option>
                                <option data-countryCode="MG" value="+261">Madagascar (+261)</option>
                                <option data-countryCode="MW" value="+265">Malawi (+265)</option>
                                <option data-countryCode="MY" value="+60">Malaysia (+60)</option>
                                <option data-countryCode="MV" value="+960">Maldives (+960)</option>
                                <option data-countryCode="ML" value="+223">Mali (+223)</option>
                                <option data-countryCode="MT" value="+356">Malta (+356)</option>
                                <option data-countryCode="MH" value="+692">Marshall Islands (+692)</option>
                                <option data-countryCode="MQ" value="+596">Martinique (+596)</option>
                                <option data-countryCode="MR" value="+222">Mauritania (+222)</option>
                                <option data-countryCode="YT" value="+269">Mayotte (+269)</option>
                                <option data-countryCode="MX" value="+52">Mexico (+52)</option>
                                <option data-countryCode="FM" value="+691">Micronesia (+691)</option>
                                <option data-countryCode="MD" value="+373">Moldova (+373)</option>
                                <option data-countryCode="MC" value="+377">Monaco (+377)</option>
                                <option data-countryCode="MN" value="+976">Mongolia (+976)</option>
                                <option data-countryCode="MS" value="+1664">Montserrat (+1664)</option>
                                <option data-countryCode="MA" value="+212">Morocco (+212)</option>
                                <option data-countryCode="MZ" value="+258">Mozambique (+258)</option>
                                <option data-countryCode="MN" value="+95">Myanmar (+95)</option>
                                <option data-countryCode="NA" value="+264">Namibia (+264)</option>
                                <option data-countryCode="NR" value="+674">Nauru (+674)</option>
                                <option data-countryCode="NP" value="+977">Nepal (+977)</option>
                                <option data-countryCode="NL" value="+31">Netherlands (+31)</option>
                                <option data-countryCode="NC" value="+687">New Caledonia (+687)</option>
                                <option data-countryCode="NZ" value="+64">New Zealand (+64)</option>
                                <option data-countryCode="NI" value="+505">Nicaragua (+505)</option>
                                <option data-countryCode="NE" value="+227">Niger (+227)</option>
                                <option data-countryCode="NG" value="+234">Nigeria (+234)</option>
                                <option data-countryCode="NU" value="+683">Niue (+683)</option>
                                <option data-countryCode="NF" value="+672">Norfolk Islands (+672)</option>
                                <option data-countryCode="NP" value="+670">Northern Marianas (+670)</option>
                                <option data-countryCode="NO" value="+47">Norway (+47)</option>
                                <option data-countryCode="OM" value="+968">Oman (+968)</option>
                                <option data-countryCode="PK" value="+92">Pakistan (+92)</option>
                                <option data-countryCode="PW" value="+680">Palau (+680)</option>
                                <option data-countryCode="PA" value="+507">Panama (+507)</option>
                                <option data-countryCode="PG" value="+675">Papua New Guinea (+675)</option>
                                <option data-countryCode="PY" value="+595">Paraguay (+595)</option>
                                <option data-countryCode="PE" value="+51">Peru (+51)</option>
                                <option data-countryCode="PH" value="+63">Philippines (+63)</option>
                                <option data-countryCode="PL" value="+48">Poland (+48)</option>
                                <option data-countryCode="PT" value="+351">Portugal (+351)</option>
                                <option data-countryCode="PR" value="+1787">Puerto Rico (+1787)</option>
                                <option data-countryCode="QA" value="+974">Qatar (+974)</option>
                                <option data-countryCode="RE" value="+262">Reunion (+262)</option>
                                <option data-countryCode="RO" value="+40">Romania (+40)</option>
                                <option data-countryCode="RU" value="+7">Russia (+7)</option>
                                <option data-countryCode="RW" value="+250">Rwanda (+250)</option>
                                <option data-countryCode="SM" value="+378">San Marino (+378)</option>
                                <option data-countryCode="ST" value="+239">Sao Tome &amp; Principe (+239)</option>
                                <option data-countryCode="SA" value="+966">Saudi Arabia (+966)</option>
                                <option data-countryCode="SN" value="+221">Senegal (+221)</option>
                                <option data-countryCode="CS" value="+381">Serbia (+381)</option>
                                <option data-countryCode="SC" value="+248">Seychelles (+248)</option>
                                <option data-countryCode="SL" value="+232">Sierra Leone (+232)</option>
                                <option data-countryCode="SG" value="+65">Singapore (+65)</option>
                                <option data-countryCode="SK" value="+421">Slovak Republic (+421)</option>
                                <option data-countryCode="SI" value="+386">Slovenia (+386)</option>
                                <option data-countryCode="SB" value="+677">Solomon Islands (+677)</option>
                                <option data-countryCode="SO" value="+252">Somalia (+252)</option>
                                <option data-countryCode="ZA" value="+27">South Africa (+27)</option>
                                <option data-countryCode="ES" value="+34">Spain (+34)</option>
                                <option data-countryCode="LK" value="+94">Sri Lanka (+94)</option>
                                <option data-countryCode="SH" value="+290">St. Helena (+290)</option>
                                <option data-countryCode="KN" value="+1869">St. Kitts (+1869)</option>
                                <option data-countryCode="SC" value="+1758">St. Lucia (+1758)</option>
                                <option data-countryCode="SD" value="+249">Sudan (+249)</option>
                                <option data-countryCode="SR" value="+597">Suriname (+597)</option>
                                <option data-countryCode="SZ" value="+268">Swaziland (+268)</option>
                                <option data-countryCode="SE" value="+46">Sweden (+46)</option>
                                <option data-countryCode="CH" value="+41">Switzerland (+41)</option>
                                <option data-countryCode="SI" value="+963">Syria (+963)</option>
                                <option data-countryCode="TW" value="+886">Taiwan (+886)</option>
                                <option data-countryCode="TJ" value="+7">Tajikstan (+7)</option>
                                <option data-countryCode="TH" value="+66">Thailand (+66)</option>
                                <option data-countryCode="TG" value="+228">Togo (+228)</option>
                                <option data-countryCode="TO" value="+676">Tonga (+676)</option>
                                <option data-countryCode="TT" value="+1868">Trinidad &amp; Tobago (+1868)</option>
                                <option data-countryCode="TN" value="+216">Tunisia (+216)</option>
                                <option data-countryCode="TR" value="+90">Turkey (+90)</option>
                                <option data-countryCode="TM" value="+7">Turkmenistan (+7)</option>
                                <option data-countryCode="TM" value="+993">Turkmenistan (+993)</option>
                                <option data-countryCode="TC" value="+1649">Turks &amp; Caicos Islands (+1649)</option>
                                <option data-countryCode="TV" value="+688">Tuvalu (+688)</option>
                                <option data-countryCode="UG" value="+256">Uganda (+256)</option>
                                <option data-countryCode="GB" value="+44">UK (+44)</option> 
                                <option data-countryCode="UA" value="+380">Ukraine (+380)</option>
                                <option data-countryCode="AE" value="+971">United Arab Emirates (+971)</option>
                                <option data-countryCode="UY" value="+598">Uruguay (+598)</option>
                                <option data-countryCode="US" value="+1">USA (+1)</option> 
                                <option data-countryCode="UZ" value="+7">Uzbekistan (+7)</option>
                                <option data-countryCode="VU" value="+678">Vanuatu (+678)</option>
                                <option data-countryCode="VA" value="+379">Vatican City (+379)</option>
                                <option data-countryCode="VE" value="+58">Venezuela (+58)</option>
                                <option data-countryCode="VN" value="+84">Vietnam (+84)</option>
                                <option data-countryCode="VG" value="+84">Virgin Islands - British (+1284)</option>
                                <option data-countryCode="VI" value="+84">Virgin Islands - US (+1340)</option>
                                <option data-countryCode="WF" value="+681">Wallis &amp; Futuna (+681)</option>
                                <option data-countryCode="YE" value="+969">Yemen (North)(+969)</option>
                                <option data-countryCode="YE" value="+967">Yemen (South)(+967)</option>
                                <option data-countryCode="ZM" value="+260">Zambia (+260)</option>
                                <option data-countryCode="ZW" value="+263">Zimbabwe (+263)</option>
                              </select>
                              {/*{formik.touched.country_code ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.country_code}</div>) : null} */}
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor>Phone</label>
                                <input type="text" name="phone" placeholder="Enter your Contact" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.contact} className="h-25 form-control" maxLength={11} required />
                                {formik.errors.phone && formik.touched.phone ? (<div className='error' style={{color:'red', fontWeight: 'bold'}}>{formik.errors.phone}</div>) : null}
                            </div>
                            <div className="form-group mt-3">
                              <label htmlFor>Message</label>
                              <textarea name="message" placeholder="Enter your Message" required="required" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} className="form-control"/>
                          </div>
                          </div>
                          {/* <div className="col-md-6 my-auto"> */}
                            
                            
                            {/* <p style = {{color : '#5777ba', fontWeight:"bold", fontSize : "20px"}} className = "text-center mt-3">OR</p> */}
                            <div className="text-center">
                                <div className="form-group mt-3">
                                    <ModalTest />
                                </div>
                                <p style = {{color : '#5777ba', fontWeight:"bold", fontSize : "20px"}} className = "mt-3">OR</p>
                                <div className="form-group mt-3">
                                    <ModalWorkingForAudioRecord />
                                </div>
                            </div>
                        
                          {/* </div> */}
                          <div className="text-center mt-3">
                              <button className="border-0 shadow-sm" type="submit"><i className="fa fa-envelope fa-lg"></i> <span style = {{paddingLeft : "15px", fontWeight : "bold"}}>Send Message</span></button>
                            </div>
                        </div>
                    </form>
                   
                    </div>
                </div>
                </div>
{/*}
        <div>    
        <div className="containerSass">
          <button className="btn btn-outline-primary">
            <div>
              <svg className="iconSass play">
                <use xlinkHref="#play" />
              </svg>
            </div>
            <div className="iconSass-container">
              <svg className="iconSass pause">
                <use xlinkHref="#pause" />
              </svg>
            </div>
          </button>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="iconSass">
          <symbol id="play" viewBox="0 0 448 512">
            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
          </symbol>
          <symbol id="pause" viewBox="0 0 448 512">
            <path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48
					48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" />
          </symbol>
          <symbol id="plus" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67
					14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33
					32-32v-32c0-17.67-14.33-32-32-32z" />
          </symbol>
          <symbol id="minus" viewBox="0 0 448 512">
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33
					32-32v-32c0-17.67-14.33-32-32-32z" />
          </symbol>
          <symbol id="twitter" viewBox="0 0 512 512">
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452
					0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568
					130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3
					27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431
					13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258
					216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502
					12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273
					41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
          </symbol>
          <symbol id="codepen" viewBox="0 0 512 512">
            <path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0
					177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571
					0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278
					63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234
					63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234
					346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857
					51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z" />
          </symbol>
        </svg>
      </div>
      */}
            </section>{/* End Contact Section */}
        </div>
    )
}

export default Contact