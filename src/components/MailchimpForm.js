import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {

  const postUrl = process.env.REACT_APP_MAILCHIMP_URL;

  return (

    <MailchimpSubscribe
        url={postUrl}
        render={ (props)=> {
            const { subscribe, status, message} = props ||{};
              return (
                <Newsletter
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
                 );
        } }
    />
  );
};