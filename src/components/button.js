import React, { Component } from 'react';

class Button extends Component{
    render() {
        return (
            <div class="card p-3">
    <div class="card-header">
        Primary Buttons
    </div>
    <div class="card-body">
        <div class="row">
            <div class="col-3">
                <p>Small Button</p>
                <button-component rci-name="Primary" rci-class="btn btn-primary btn-sm">
                </button-component>
            </div>
            <div class="col-3">
                <p>Default Button</p>
                <button-component rci-name="Primary" rci-class="btn btn-primary"></button-component>
            </div>
            <div class="col-3">
                <p>Large Button</p>
                <button-component rci-name="Primary" rci-class="btn btn-primary btn-lg"></button-component>
            </div>
            <div class="col-3">
                <p>Disabled Button</p>
                <button-component rci-disabled="True" rci-name="Primary" rci-class="btn btn-primary"></button-component>
            </div>
        </div>
        <div class="m-3 ">
            <div class="row highlight">
                <code>&lt;button-component rci-name="Primary" rci-class="btn btn-primary btn-sm"&gt;&lt;/button-component&gt;</code>
            </div>
            <div class="row highlight">
                <code>&lt;button-component rci-name="Primary" rci-class="btn btn-primary margin-5"&gt;&lt;/button-component&gt;</code>
            </div>
            <div class="row highlight">
                <code>&lt;button-component rci-name="Primary" rci-class="btn btn-primary btn-lg margin-5"&gt;&lt;/button-component&gt;</code>
            </div>
            <div class="row highlight">
                <code>&lt;button-component rci-disabled="True" rci-name="Primary" rci-class="btn btn-primary"&gt;&lt;/button-component&gt;</code>
            </div>
        </div>
        <div class="border-bottom pb-3 mb-3 row">
            <div class="col-md-3 col-12">
                <p>Small Button</p>
                <button-component type="button" rci-name="Primary" rci-class="btn btn-outline-primary btn-sm"></button-component>
            </div>
            <div class="col-md-3 col-12">
                <p>Default Button</p>
                <button-component type="button" rci-name="Primary" rci-class="shadow-1 btn btn-outline-primary"></button-component>
            </div>
            <div class="col-md-3 col-12">
                <p>Large Button</p>
                <button-component type="button" rci-name="Primary" rci-class="shadow-1 btn btn-outline-primary btn-lg"></button-component>
            </div>
            <div class="col-md-3 col-12">
                <p>Disabled Button</p>
                <button-component rci-disabled="True" rci-name="Primary" type="button" rci-class="btn btn-outline-primary"></button-component>
            </div>
        </div>
        <div class="m-3 ">
            <div class="row highlight">
                <code>&lt;button-component rci-name="Primary" rci-class="btn btn-outline-primary btn-sm"&gt;&lt;/button-component&gt;</code>
            </div>
            <div class="row highlight">
                <code>&lt;button-component rci-name="Primary" rci-class="btn btn-outline-primary"&gt;&lt;/button-component&gt;</code>
            </div>
            <div class="row highlight">
                <code>&lt;button-component rci-name="Primary" rci-class="btn btn-outline-primary btn-lg"&gt;&lt;/button-component&gt;</code>
            </div>
            <div class="row highlight">
                <code>&lt;button-component rci-disabled="True" type="button" rci-class="btn btn-outline-primary"&gt;&lt;/button-component&gt;</code>
            </div>
        </div>
        <div class="card-header">
        Priority Buttons
        </div>
        <div class="border-bottom pb-3 mb-3 row">
        <div class="col-12 col">
            <p class="w-75">Secondary Buttons provide users with alternative actions apart from our desired user journey, such as an external link or optional functions like filters.</p></div>
    <div class="col-md-3 col-12">
    <p>Small Button</p>
    <button-component type="button" rci-name="secondary" rci-class="shadow-1 btn btn-secondary btn-sm"></button-component>
    </div>
    <div class="col-md-3 col-12">
    <p>Default Button</p>
    <button-component type="button" rci-name="secondary" rci-class="shadow-1 btn btn-secondary"></button-component>
</div>
<div class="col-md-3 col-12">
    <p>Large Button</p>
    <button-component type="button" rci-name="secondary" rci-class="shadow-1 btn btn-secondary btn-lg"></button-component>
</div>
<div class="col-md-3 col-12">
    <p>Disabled Button</p>
    <button-component disabled="" rci-name="secondary" type="button" rci-class="btn btn-secondary"></button-component>
</div>
    </div>
    <div class="m-3 ">
            <div class="row highlight">
                <code>&lt;button-component rci-name="Priority" rci-class="shadow-1 btn btn-priority"&gt;&lt;/button-component&gt;</code>
            </div>
            <div class="row highlight">
                <code>&lt;button-component rci-name="Priority" rci-class="shadow-4 btn btn-priority btn-lg"&gt;&lt;/button-component&gt;</code>
            </div>
            <div class="row highlight">
                <code>&lt;button-component rci-disabled="True" rci-name="Priority" type="button" rci-class="btn btn-priority"&gt;&lt;/button-component&gt;</code>
            </div>
        </div>
        <div class="card-header">
        Primary Buttons
        </div>
        <div class="border-bottom pb-3 mb-3 row">
    <div class="col-12 col">
        <p class="w-75">Priority Buttons are reserved for our highest actions, such as "Book Now". Use sparingly.</p>
    </div>
    <div class="col-md-3 col-12">
        <p>Default Button</p>
        <button-component type="button" rci-name="Priority" rci-class="shadow-1 btn btn-priority"></button-component>
    </div>
    <div class="col-md-3 col-12">
        <p>Large Button</p>
        <button-component type="button" rci-name="Priority" rci-class="shadow-4 btn btn-priority btn-lg"></button-component>
    </div>
    <div class="col-md-3 col-12">
        <p>Disabled Button</p>
        <button-component rci-disabled="True" rci-name="Priority" type="button" rci-class="btn btn-priority"></button-component>
    </div>
    </div>
    <div class="m-3 ">
            <div class="row highlight">
                <code>&lt;button-component rci-name="Priority" rci-class="shadow-1 btn btn-priority"&gt;&lt;/button-component&gt;</code>
            </div>
            <div class="row highlight">
                <code>&lt;button-component rci-name="Priority" rci-class="shadow-4 btn btn-priority btn-lg"&gt;&lt;/button-component&gt;</code>
            </div>
            <div class="row highlight">
                <code>&lt;button-component rci-disabled="True" rci-name="Priority" type="button" rci-class="btn btn-priority"&gt;&lt;/button-component&gt;</code>
            </div>
        </div>




    </div>

</div>
        );
    }
}

export default Button;