import * as React from 'react';
import { useEffect } from "react";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import './sample.css';
const Default = () => {
    const floatFocus = (args) => {
        args.target.parentElement.classList.add("e-input-focus");
    };
    const floatBlur = (args) => {
        args.target.parentElement.classList.remove('e-input-focus');
    };
    const onIconClick = (args) => {
        args.persist();
        setTimeout(() => {
            args.target.classList.add('e-input-btn-ripple');
        }, 500);
    };
    const onIconUnClick = (args) => {
        args.target.classList.remove('e-input-btn-ripple');
    };
    return (<div className='control-pane'>
            <div className='control-section input-content-wrapper'>
                <div className="row custom-margin material">
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6"><b>Outlined and Filled</b></div>
                </div>
                <div className="row custom-margin custom-padding-5 material">
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                        <TextBoxComponent placeholder="Outlined" cssClass="e-outline" floatLabelType="Auto"/>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                        <TextBoxComponent placeholder="Filled" cssClass="e-filled" floatLabelType="Auto"/>
                    </div>
                </div>
                <div className="row custom-margin">
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6"><b>Floating Label</b></div>
                </div>
                <div className="row custom-margin custom-padding-5">
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                        <TextBoxComponent placeholder="First Name" floatLabelType="Auto"/>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                        <TextBoxComponent placeholder="Last Name" floatLabelType="Auto" enableRtl={true}/>
                    </div>
                </div>
                <div className="row custom-margin custom-padding-5">
                    <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                        <div className="e-float-input e-input-group">
                            <input type="text" onFocus={floatFocus} onBlur={floatBlur} required/>
                            <span className="e-float-line"></span>
                            <label className="e-float-text">Country</label>
                            <span className="e-input-group-icon e-spin-down" onMouseDown={onIconClick} onMouseUp={onIconUnClick}></span>
                        </div>
                    </div>
                </div>
                <div className="row custom-margin">
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6"><b>Inputs</b></div>
                </div>
                <div className="row custom-margin">
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                        <div className="e-input-group">
                            <input className="e-input" type="text" onFocus={floatFocus} onBlur={floatBlur} placeholder="Enter Name"/>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                        <div className="e-input-group e-rtl">
                            <input className="e-input" onFocus={floatFocus} onBlur={floatBlur} type="text" placeholder="Last Name"/>
                        </div>
                    </div>
                </div>
                <div className="row custom-margin">
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                        <div className="e-input-group">
                            <input className="e-input" onFocus={floatFocus} onBlur={floatBlur} type="password" placeholder="Password" defaultValue="password"/>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                        <div className="e-input-group">
                            <input className="e-input" onFocus={floatFocus} onBlur={floatBlur} type="email" placeholder="Enter Email"/>
                        </div>
                    </div>
                </div>
                <div className="row custom-margin">
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                        <div className="e-input-group e-disabled">
                            <input className="e-input" onFocus={floatFocus} onBlur={floatBlur} type="text" placeholder="Disabled" disabled/>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                        <div className="e-input-group">
                            <input className="e-input" onFocus={floatFocus} onBlur={floatBlur} type="text" placeholder="Enter Name" value="Readonly" readOnly/>
                        </div>
                    </div>
                </div>
                <div className="row custom-margin">
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6"><b>Validation States</b></div>
                </div>
                <div className="row custom-margin">
                    <div className="col-xs-4 col-sm-4 col-lg-4 col-md-4">
                        <div className="e-input-group e-success">
                            <input className="e-input" onFocus={floatFocus} onBlur={floatBlur} type="text" placeholder="Success"/>
                        </div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-lg-4 col-md-4">
                        <div className="e-input-group e-warning">
                            <input className="e-input" type="text" onFocus={floatFocus} onBlur={floatBlur} placeholder="Warning"/>
                        </div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-lg-4 col-md-4">
                        <div className="e-input-group e-error">
                            <input className="e-input" onFocus={floatFocus} onBlur={floatBlur} type="text" placeholder="Error"/>
                        </div>
                    </div>
                </div>
                <div className="row custom-margin">
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6"><b>Sizing</b></div>
                </div>
                <div className="row custom-margin">
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6 small-textbox">
                        <div className="e-input-group e-small">
                            <input className="e-input" onFocus={floatFocus} onBlur={floatBlur} type="text" placeholder="Small"/>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                        <div className="e-input-group">
                            <input className="e-input" onFocus={floatFocus} onBlur={floatBlur} type="text" placeholder="Normal"/>
                        </div>
                    </div>
                </div>
                <div className="row custom-margin">
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6"><b>Input & Elements</b></div>
                </div>
                <div className="row custom-margin">
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                        <div className="e-input-group">
                            <input className="e-input" onFocus={floatFocus} onBlur={floatBlur} type="text" placeholder="Date of Birth"/>
                            <span className="e-input-group-icon e-date-icon" onMouseDown={onIconClick} onMouseUp={onIconUnClick}></span>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                        <div className="e-input-group e-float-icon-left">
                            <span className="e-input-group-icon e-upload-picture" onMouseDown={onIconClick} onMouseUp={onIconUnClick}></span>
                            <div className="e-input-in-wrap">
                            <input className="e-input" onFocus={floatFocus} onBlur={floatBlur} type="text" placeholder="Upload Picture"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};
export default Default;