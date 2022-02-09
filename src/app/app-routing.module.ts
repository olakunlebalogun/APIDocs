import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntranceComponent } from './components/entrance/entrance.component';
import { MerchantPhotoComponent } from './components/entrance/merchant-photo/merchant-photo.component';
import { OnboardComponent } from './components/entrance/onboard/onboard.component';
import { PassChangesComponent } from './components/entrance/pass-changes/pass-changes.component';
import { PasswordMobileResetComponent } from './components/entrance/password-mobile-reset/password-mobile-reset.component';
import { PasswordResetCompleteComponent } from './components/entrance/password-reset-complete/password-reset-complete.component';
import { PasswordResetComponent } from './components/entrance/password-reset/password-reset.component';
import { PayMerchantVerifyComponent } from './components/entrance/pay-merchant-verify/pay-merchant-verify.component';
import { PayMerchantComponent } from './components/entrance/pay-merchant/pay-merchant.component';
import { PaymentChargeRetrievePororationComponent } from './components/entrance/payment-charge-retrieve-pororation/payment-charge-retrieve-pororation.component';
import { PaymentChargeRetrieveComponent } from './components/entrance/payment-charge-retrieve/payment-charge-retrieve.component';
import { PaymentInitiateComponent } from './components/entrance/payment-initiate/payment-initiate.component';
import { PaymentInstallmentComponent } from './components/entrance/payment-installment/payment-installment.component';
import { PaymentLinkComponent } from './components/entrance/payment-link/payment-link.component';
import { PaymentRetrieveComponent } from './components/entrance/payment-retrieve/payment-retrieve.component';
import { PaymentSendOtpComponent } from './components/entrance/payment-send-otp/payment-send-otp.component';
import { PaymentVerifyOtpComponent } from './components/entrance/payment-verify-otp/payment-verify-otp.component';
import { PaymentVerifyComponent } from './components/entrance/payment-verify/payment-verify.component';
import { SecretQuestionComponent } from './components/entrance/secret-question/secret-question.component';
import { SignInComponent } from './components/entrance/sign-in/sign-in.component';
import { UpdateAuthenticationPasswordComponent } from './components/entrance/update-authentication-password/update-authentication-password.component';
import { UpdateAuthenticationPinComponent } from './components/entrance/update-authentication-pin/update-authentication-pin.component';
import { ValidateCacComponent } from './components/entrance/validate-cac/validate-cac.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { FileDownloadComponent } from './components/file_uploader/file-download/file-download.component';
import { UploadFileComponent } from './components/file_uploader/upload-file/upload-file.component';
import { HomeComponent } from './components/home/home.component';
import { AddTransactionPinComponent } from './components/merchant/add-transaction-pin/add-transaction-pin.component';
import { AddUpdateComplianceComponent } from './components/merchant/add-update-compliance/add-update-compliance.component';
import { AddUpdatePayoutComponent } from './components/merchant/add-update-payout/add-update-payout.component';
import { AuthenticationUpdatePasswordComponent } from './components/merchant/authentication-update-password/authentication-update-password.component';
import { AuthenticationUpdatePinComponent } from './components/merchant/authentication-update-pin/authentication-update-pin.component';
import { BankAddComponent } from './components/merchant/bank-add/bank-add.component';
import { BanksComponent } from './components/merchant/banks/banks.component';
import { BvnCheckComponent } from './components/merchant/bvn-check/bvn-check.component';
import { BvnVerifyComponent } from './components/merchant/bvn-verify/bvn-verify.component';
import { ChangePasswordComponent } from './components/merchant/change-password/change-password.component';
import { DashboardOneComponent } from './components/merchant/dashboard-one/dashboard-one.component';
import { DeleteComplianceComponent } from './components/merchant/delete-compliance/delete-compliance.component';
import { DeletePayoutComponent } from './components/merchant/delete-payout/delete-payout.component';
import { GetComplianceComponent } from './components/merchant/get-compliance/get-compliance.component';
import { GetPayoutComponent } from './components/merchant/get-payout/get-payout.component';
import { ListBankComponent } from './components/merchant/list-bank/list-bank.component';
import { MerchantComponent } from './components/merchant/merchant.component';
import { PreviewPhotoComponent } from './components/merchant/preview-photo/preview-photo.component';
import { ProfileUpdateComponent } from './components/merchant/profile-update/profile-update.component';
import { TransactionPinChangeComponent } from './components/merchant/transaction-pin-change/transaction-pin-change.component';
import { TransactionPinCreateComponent } from './components/merchant/transaction-pin-create/transaction-pin-create.component';
import { TransactionPinUpdateComponent } from './components/merchant/transaction-pin-update/transaction-pin-update.component';
import { TransactionPinVerifyComponent } from './components/merchant/transaction-pin-verify/transaction-pin-verify.component';
import { UploadPhotographComponent } from './components/merchant/upload-photograph/upload-photograph.component';
import { WithdrawComponent } from './components/merchant/withdraw/withdraw.component';
import { InitiateComponent } from './components/transaction/initiate/initiate.component';
import { ListByMerchantEmailComponent } from './components/transaction/list-by-merchant-email/list-by-merchant-email.component';
import { ListByMerchantComponent } from './components/transaction/list-by-merchant/list-by-merchant.component';
import { SendOtpComponent } from './components/transaction/send-otp/send-otp.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { VerifyOtpComponent } from './components/transaction/verify-otp/verify-otp.component';
import { VerifyComponent } from './components/transaction/verify/verify.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'entrance', component: EntranceComponent },
  {
    path: 'authentication-password',
    component: UpdateAuthenticationPasswordComponent,
  },
  { path: 'authentication-pin', component: UpdateAuthenticationPinComponent },
  { path: 'Merchant-photo', component: MerchantPhotoComponent },
  { path: 'onboard', component: OnboardComponent },
  { path: 'pass-changes', component: PassChangesComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  {
    path: 'password-reset-complete',
    component: PasswordResetCompleteComponent,
  },
  { path: 'password-mobile-reset', component: PasswordMobileResetComponent },
  { path: 'pay-merchant', component: PayMerchantComponent },
  { path: 'pay-merchant-verify', component: PayMerchantVerifyComponent },
  {
    path: 'payment-charge-retrieve',
    component: PaymentChargeRetrieveComponent,
  },
  {
    path: 'payment-charge-retrieve-pororation',
    component: PaymentChargeRetrievePororationComponent,
  },
  { path: 'payment-initiate', component: PaymentInitiateComponent },
  { path: 'payment-installment', component: PaymentInstallmentComponent },
  { path: 'payment-link', component: PaymentLinkComponent },
  { path: 'payment-otp-send', component: PaymentSendOtpComponent },
  { path: 'payment-retrieve', component: PaymentRetrieveComponent },
  { path: 'payment-verify', component: PaymentVerifyComponent },
  { path: 'payment-verify-otp', component: PaymentVerifyOtpComponent },
  { path: 'preview-photo', component: PreviewPhotoComponent },
  { path: 'secret-question', component: SecretQuestionComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'validate-cac', component: ValidateCacComponent },

  { path: 'file-uploader', component: FileUploaderComponent },
  { path: 'file-download', component: FileDownloadComponent },
  { path: 'upload-file', component: UploadFileComponent },

  { path: 'merchant', component: MerchantComponent },
  { path: 'add-update-compliance', component: AddUpdateComplianceComponent },
  { path: 'add-update-payout', component: AddUpdatePayoutComponent },
  { path: 'add-transaction-pin', component: AddTransactionPinComponent },
  {
    path: 'authentication-update-password',
    component: AuthenticationUpdatePasswordComponent,
  },
  {
    path: 'authentication-update-pin',
    component: AuthenticationUpdatePinComponent,
  },
  { path: 'bank-add', component: BankAddComponent },
  { path: 'list-bank', component: ListBankComponent },
  { path: 'banks', component: BanksComponent },
  { path: 'bvn-check', component: BvnCheckComponent },
  { path: 'bvn-verify', component: BvnVerifyComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'dashboard', component: DashboardOneComponent },
  { path: 'delete-compliance', component: DeleteComplianceComponent },
  { path: 'delete-payout', component: DeletePayoutComponent },
  { path: 'get-compliance', component: GetComplianceComponent },
  { path: 'get-payout', component: GetPayoutComponent },
  { path: 'preview-photo', component: PreviewPhotoComponent },
  { path: 'profile-update', component: ProfileUpdateComponent },
  { path: 'transaction-pin-change', component: TransactionPinChangeComponent },
  { path: 'transaction-pin-create', component: TransactionPinCreateComponent },
  { path: 'transaction-pin-update', component: TransactionPinUpdateComponent },
  { path: 'transaction-pin-verify', component: TransactionPinVerifyComponent },
  { path: 'upload-photograph', component: UploadPhotographComponent },
  { path: 'withdraw', component: WithdrawComponent },

  { path: 'transaction', component: TransactionComponent },
  { path: 'initiate', component: InitiateComponent },
  { path: 'list-by-merchant-email', component: ListByMerchantEmailComponent },
  { path: 'list-by-merchant', component: ListByMerchantComponent },
  { path: 'send-otp', component: SendOtpComponent },
  { path: 'verify', component: VerifyComponent },
  { path: 'verify-otp', component: VerifyOtpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
