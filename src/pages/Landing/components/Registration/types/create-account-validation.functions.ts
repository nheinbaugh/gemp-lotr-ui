import { createErrorActionResult, createSuccessActionResult } from "../../../../../common/action-result/action-result.functions";
import { ActionResult } from "../../../../../common/action-result/action-result.interface";
import { LoginErrors as AccountCreationErrorMessages } from "./account-validation-errors.constants";

const loginRegex = new RegExp(/[@,^,&,*,(,),#,$,!]/)

export const isValidAccount = (login: string, password: string, passwordConfimation: string): ActionResult<boolean> => {
    if (login === '' || password === '' || passwordConfimation === '') {
        return createErrorActionResult('Please provide all required fields');
    }
    const isValidLogin = isLoginValid(login);
    if (!isValidLogin.success) {
        return isValidLogin;
    }
    return createSuccessActionResult(true);
}

export const isLoginValid = (login: string): ActionResult<boolean> => {
    const containsInvalidCharacters = loginRegex.test(login);
    
    if (containsInvalidCharacters) {
        return createErrorActionResult(AccountCreationErrorMessages.invalidLoginCharacters);
    }

    if (login.length < 3 || login.length > 10) {
        return createErrorActionResult(AccountCreationErrorMessages.invalidLength);
    }
    return createSuccessActionResult(true);
}