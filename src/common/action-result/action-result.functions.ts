import { ActionResult } from "./action-result.interface";

export const createSuccessActionResult = <T>(result: T): ActionResult<T> => ({
    success: true,
    result
});

export const createErrorActionResult = <T>(errorMessage: string): ActionResult<T> => ({
    success: false,
    error: errorMessage
});
