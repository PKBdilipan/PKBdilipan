import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {INITIALVALUE} from '../common';


export const validate = {
                                  name: Yup.string()
                                    .required('Name is Required'),
                                    fathername: Yup.string()
                                                .required('Fathers Name is Required'),
                                                dob: Yup.string()
                                                                        .required('DOB is Required'),
                                    doorno: Yup.string()
                                      .required('Door No is Required'),
                                      Address1: Yup.string()
                                      .required('Address line1 is Required'),
                                       Address2: Yup.string().required('Address line1 is Required'),
        city: Yup.string().required('City is Required'),
        state: Yup.string().required('State is Required'),pincode: Yup.string().required('Pin code is Required'),
        country: Yup.string().required('Country is Required'),mobileno: Yup.string().required('Mobile Number is Required'),
        email: Yup.string().required('Email is Required'),aadhar: Yup.string().required('Aadhar Number is Required'),
        lang: Yup.string().required('Language is Required'),height: Yup.string().required('Height is Required'),


                                }

class ProductForm extends React.Component {
constructor(props) {
super(props);
}
render() {

return(
   <div>
      <Formik
        initialValues={INITIALVALUE}
        onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        console.log(values)
        this.props.onSave(values);
        }}
        validationSchema={Yup.object().shape(validate)}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            setFieldValue
          } = props;
          return (
            <form onSubmit={handleSubmit}>
            <div className="container-fluid">
            <div className="row">
                                        <div className="col-md-4">
                                                                                    <label htmlFor="name">Name : </label>

                                         <input
                                                                     id="name"
                                                                     placeholder="Name"
                                                                     type="text"
                                                                     value={values.name}
                                                                     onChange={handleChange}
                                                                     onBlur={handleBlur}
                                                                     className={
                                                                       errors.name && touched.name ? 'text-input error' : 'text-input'
                                                                     }
                                                                   />

                                                                    {errors.name && touched.name && (
                                                                                   <div className="input-feedback">{errors.name}</div>
                                                                                 )}
                                            </div>
                                         <div className="col-md-4">
                                                                                    <label htmlFor="fathername">Fathers Name : </label>
 <input
                                                                     id="fathername"
                                                                     placeholder="Father name"
                                                                     type="text"
                                                                     value={values.fathername}
                                                                     onChange={handleChange}
                                                                     onBlur={handleBlur}
                                                                     className={
                                                                       errors.fathername && touched.fathername ? 'text-input error' : 'text-input'
                                                                     }
                                                                   />

                                                                    {errors.fathername && touched.fathername && (
                                                                                   <div className="input-feedback">{errors.fathername}</div>
                                                                                 )}                                                                                </div>
                                        <div className="col-md-4">
                                                                                                                            <label htmlFor="dob">DOB :</label>
 <input
                                                                     id="dob"
                                                                     placeholder="DOB"
                                                                     type="date"
                                                                     value={values.dob}
                                                                     onChange={handleChange}
                                                                     onBlur={handleBlur}
                                                                     className={
                                                                       errors.dob && touched.dob ? 'text-input error' : 'text-input'
                                                                     }
                                                                   />

                                                                    {errors.dob && touched.dob && (
                                                                                   <div className="input-feedback">{errors.dob}</div>
                                                                                 )}                                                                                                                        </div>
                                                                                </div>

                                        </div>
                                        <br/>

<div className="row">
  <div className="col-md-4">
                                                                                <label htmlFor="doorno">
                                                                                                Door No :
                                                                                              </label>
                                                                                              <input
                                                                                                id="doorno"
                                                                                                placeholder="Door No"
                                                                                                type="text"
                                                                                                value={values.doorno}
                                                                                                onChange={handleChange}
                                                                                                onBlur={handleBlur}
                                                                                                className={
                                                                                                  errors.doorno && touched.doorno ? 'text-input error' : 'text-input'
                                                                                                }
                                                                                              />
                                                                                              {errors.doorno && touched.doorno && (
                                                                                                <div className="input-feedback">{errors.doorno}</div>
                                                                                              )}
                                                                                </div>
              <div className="col-md-4">
              <label htmlFor="Address1">
               Address Line 1 :
              </label>
             <input
                             id="Address1"
                             placeholder="Address Line 1"
                             type="text"
                             value={values.Address1}
                             onChange={handleChange}
                             onBlur={handleBlur}
                             className={
                               errors.Address1 && touched.Address1 ? 'text-input error' : 'text-input'
                             }
                           />

                            {errors.Address1 && touched.Address1 && (
                                           <div className="input-feedback">{errors.Address1}</div>
                                         )}
</div>
 <div className="col-md-4">
<label htmlFor="Address2">
               Address Line 2 :
              </label>
             <input
                             id="Address2"
                             placeholder="Address Line 2"
                             type="text"
                             value={values.Address2}
                             onChange={handleChange}
                             onBlur={handleBlur}
                             className={
                               errors.Address2 && touched.Address2 ? 'text-input error' : 'text-input'
                             }
                           />

                            {errors.Address2 && touched.Address2 && (
                                           <div className="input-feedback">{errors.Address2}</div>
                                         )}
</div>
</div>
<br/>
<div className="row">
  <div className="col-md-4">
                                                                                <label htmlFor="city">
                                                                                                City :
                                                                                              </label>
                                                                                              <input
                                                                                                id="city"
                                                                                                placeholder="City"
                                                                                                type="text"
                                                                                                value={values.city}
                                                                                                onChange={handleChange}
                                                                                                onBlur={handleBlur}
                                                                                                className={
                                                                                                  errors.city && touched.city ? 'text-input error' : 'text-input'
                                                                                                }
                                                                                              />
                                                                                              {errors.city && touched.city && (
                                                                                                <div className="input-feedback">{errors.city}</div>
                                                                                              )}
                                                                                </div>
              <div className="col-md-4">
              <label htmlFor="state">
               State :
              </label>
             <input
                             id="state"
                             placeholder="State"
                             type="text"
                             value={values.state}
                             onChange={handleChange}
                             onBlur={handleBlur}
                             className={
                               errors.state && touched.state ? 'text-input error' : 'text-input'
                             }
                           />

                            {errors.state && touched.state && (
                                           <div className="input-feedback">{errors.state}</div>
                                         )}
</div>
 <div className="col-md-4">
<label htmlFor="pincode">
               Pin code :
              </label>
             <input
                             id="pincode"
                             placeholder="Pin code"
                             type="text"
                            onChange={e => {
                                                                                  e.preventDefault();
                                                                                  const { value } = e.target;
                                                                                  const regex = /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;
                                                                                  if (regex.test(value.toString())) {
                                                                                    setFieldValue("pincode", value);
                                                                                  }
                                                                                }}
                             onBlur={handleBlur}
                             className={
                               errors.pincode && touched.pincode ? 'text-input error' : 'text-input'
                             }
                           />

                            {errors.pincode && touched.pincode && (
                                           <div className="input-feedback">{errors.pincode}</div>
                                         )}
</div>
</div>
<br/>
<div className="row">
  <div className="col-md-4">
                                                                                <label htmlFor="country">
                                                                                                Country :
                                                                                              </label>
                                                                                              <input
                                                                                                id="country"
                                                                                                placeholder="Country"
                                                                                                type="text"
                                                                                                value={values.country}
                                                                                                onChange={handleChange}
                                                                                                onBlur={handleBlur}
                                                                                                className={
                                                                                                  errors.country && touched.country ? 'text-input error' : 'text-input'
                                                                                                }
                                                                                              />
                                                                                              {errors.country && touched.country && (
                                                                                                <div className="input-feedback">{errors.country}</div>
                                                                                              )}
                                                                                </div>
              <div className="col-md-4">
              <label htmlFor="mobileno">
               Mobile Number :
              </label>
             <input
                             id="mobileno"
                             placeholder="Mobile Number"
                             type="number"
                             value={values.mobileno}
                             onChange={e => {
                                                      e.preventDefault();
                                                      const { value } = e.target;
                                                      const regex = /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;
                                                      if (regex.test(value.toString())) {
                                                        setFieldValue("mobileno", value);
                                                      }
                                                    }}
                             onBlur={handleBlur}
                             className={
                               errors.mobileno && touched.mobileno ? 'text-input error' : 'text-input'
                             }
                           />

                            {errors.mobileno && touched.mobileno && (
                                           <div className="input-feedback">{errors.mobileno}</div>
                                         )}
</div>
 <div className="col-md-4">
<label htmlFor="email">
               Email :
              </label>
             <input
                             id="email"
                             placeholder="Email"
                             type="email"
                             value={values.email}
                             onChange={handleChange}
                             onBlur={handleBlur}
                             className={
                               errors.email && touched.email ? 'text-input error' : 'text-input'
                             }
                           />

                            {errors.email && touched.email && (
                                           <div className="input-feedback">{errors.email}</div>
                                         )}
</div>
</div>
<br/>
<div className="row">
  <div className="col-md-4">
                                                                                <label htmlFor="aadhar">
                                                                                                Aadhar Number :
                                                                                              </label>
                                                                                              <input
                                                                                                id="aadhar"
                                                                                                placeholder="Aadhar Number"
                                                                                                type="text"
                                                                                                value={values.aadhar}
                                                                                               onChange={e => { e.preventDefault();
                                                                                                                  const { value } = e.target;
                                                                                                                 const regex = /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;
                                                                                                                                                                                  if (regex.test(value.toString())) {
                                                                                                                                                                                    setFieldValue("aadhar", value);
                                                                                                                                                                                  }
                                                                                                                                                                                }}
                                                                                                onBlur={handleBlur}
                                                                                                className={
                                                                                                  errors.aadhar && touched.aadhar ? 'text-input error' : 'text-input'
                                                                                                }
                                                                                              />
                                                                                              {errors.aadhar && touched.aadhar && (
                                                                                                <div className="input-feedback">{errors.aadhar}</div>
                                                                                              )}
                                                                                </div>
              <div className="col-md-4">
              <label htmlFor="lang">
               Languages Known :
              </label>
             <input
                             id="lang"
                             placeholder="Language"
                             type="text"
                             value={values.lang}
                             onChange={handleChange}
                             onBlur={handleBlur}
                             className={
                               errors.lang && touched.lang ? 'text-input error' : 'text-input'
                             }
                           />

                            {errors.lang && touched.lang && (
                                           <div className="input-feedback">{errors.lang}</div>
                                         )}
</div>
 <div className="col-md-4">
<label htmlFor="height">
               Height (Meters) :
              </label>
             <input
                             id="height"
                             placeholder="Height"
                             type="text"
                             value={values.height}
                             onChange={handleChange}
                             onBlur={handleBlur}
                             className={
                               errors.height && touched.height ? 'text-input error' : 'text-input'
                             }
                           />

                            {errors.height && touched.height && (
                                           <div className="input-feedback">{errors.height}</div>
                                         )}
</div>
</div>
<br/>
<div className="row">
<div className="col-md-1">
                                         <button type="submit" className='btn btn-primary' disabled={isSubmitting}>
                                                         Submit
                                                       </button></div>
             <div className="col-md-1"> <button
                type="button"
                className="btn btn-secondary"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button></div>
</div>
            </form>
          );
        }}
      </Formik>

    </div>
    )
    }
  };

export default ProductForm;

