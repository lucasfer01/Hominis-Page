import service from "../../../service";

export function onSubmit(values: any, actions: any) {
    service.post('/form-data/send-email', values);

    actions.resetForm();
};