import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { IManageGuestRequest } from "../../models/manage-guest.model";

const BuildForm = (builder:FormBuilder, defaultValue:IManageGuestRequest) => {
    return builder.group({
        name: new FormControl({
            value: defaultValue.name, 
            disabled: false
        }, 
        {
            validators: [Validators.required]
        }),
        indicative: new FormControl({
            value: defaultValue.indicative, 
            disabled: false
        }, 
        {
            validators: [Validators.required, Validators.min(1), Validators.maxLength(4)]
        }),
        phone: new FormControl({
            value: defaultValue.phone, 
            disabled: false
        }, 
        {
            validators: [Validators.required]
        }),
        documentType: new FormControl({
            value: defaultValue.documentType, 
            disabled: false
        }, 
        {
            validators: [Validators.required, Validators.min(0)]
        }),
        document: new FormControl({
            value: defaultValue.document, 
            disabled: false
        },
        {
            validators: [Validators.required]
        }),
        lastName: new FormControl({
            value: defaultValue.lastName, 
            disabled: false
        },
        {
            validators: [Validators.required]
        }),
        birth: new FormControl<Date|null>({
            value: defaultValue.birth, 
            disabled: false
        },
        {
            validators: [Validators.required, Validators.nullValidator]
        }),
        gender: new FormControl({
            value: defaultValue.gender, 
            disabled: false
        }, 
        {
            validators: [Validators.required, Validators.min(0)]
        }),
        email: new FormControl({
            value: defaultValue.email, 
            disabled: false
        },
        {
            validators: [Validators.required, Validators.email]
        }),
    })
}

export const Utils = {
    BuildForm: BuildForm
}