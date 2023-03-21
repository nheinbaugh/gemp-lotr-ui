import {
  createErrorActionResult,
  createSuccessActionResult,
} from '../../../../../common/action-result/action-result.functions';
import { ActionResult } from '../../../../../common/action-result/action-result.interface';

export default (login: string, password: string): ActionResult<boolean> => {
  if (login === '') {
    return createErrorActionResult('Please provide a username');
  }
  if (password === '') {
    return createErrorActionResult('Please provide a password');
  }
  return createSuccessActionResult(true);
};
