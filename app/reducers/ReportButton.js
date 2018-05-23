import { REPORT_BUTTON } from '../constants/ReportButton';

export default function reportButton(action) {
  switch (action.type) {
    case REPORT_BUTTON:
      return true;
    default:
      return false;
  }
}
