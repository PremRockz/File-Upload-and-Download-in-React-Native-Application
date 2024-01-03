export interface SnackbarProps {
    position?: 'Bottom' | 'Top';
    snackBarType:
      | 'Success'
      | 'Failure'
      | 'Notification'
      | 'NotificationWithoutIcon'
      | 'Offline';
    header?: string;
    message?: string;
    duration?: number;
    actionLabel?: string;
    onActionPress?: () => void;
    onDismissSnackbar?: () => any;
    isPermanent?: boolean;
  }
  