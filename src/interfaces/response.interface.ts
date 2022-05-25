export interface ErrorField {
  field: string;
  location: 'body';
  description: string;
}


export interface ErrorResponse {
  error: {
    code: string;
    errors?: ErrorField;
    message: string;
  };
  meta: {
    resource: string;
    timestamp: string;
  };
}
