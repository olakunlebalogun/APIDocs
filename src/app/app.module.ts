import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './components/default/default.component';
import { IndexComponent } from './components/Pages/index/index.component';
import { SectionOneComponent } from './components/Pages/section-one/section-one.component';
import { SectionTwoComponent } from './components/Pages/section-two/section-two.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SectionThreeComponent } from './components/Pages/section-three/section-three.component';
import { SectionFourComponent } from './components/Pages/section-four/section-four.component';
import { SectionFiveComponent } from './components/Pages/section-five/section-five.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EntranceComponent } from './components/entrance/entrance.component';
import { UpdateAuthenticationPasswordComponent } from './components/entrance/update-authentication-password/update-authentication-password.component';
import { UpdateAuthenticationPinComponent } from './components/entrance/update-authentication-pin/update-authentication-pin.component';
import { MerchantPhotoComponent } from './components/entrance/merchant-photo/merchant-photo.component';
import { OnboardComponent } from './components/entrance/onboard/onboard.component';
import { PassChangesComponent } from './components/entrance/pass-changes/pass-changes.component';
import { PasswordResetComponent } from './components/entrance/password-reset/password-reset.component';
import { PasswordResetCompleteComponent } from './components/entrance/password-reset-complete/password-reset-complete.component';
import { PayMerchantComponent } from './components/entrance/pay-merchant/pay-merchant.component';
import { PayMerchantVerifyComponent } from './components/entrance/pay-merchant-verify/pay-merchant-verify.component';
import { PaymentChargeRetrieveComponent } from './components/entrance/payment-charge-retrieve/payment-charge-retrieve.component';
import { PaymentChargeRetrievePororationComponent } from './components/entrance/payment-charge-retrieve-pororation/payment-charge-retrieve-pororation.component';
import { PaymentInitiateComponent } from './components/entrance/payment-initiate/payment-initiate.component';
import { PaymentInstallmentComponent } from './components/entrance/payment-installment/payment-installment.component';
import { PaymentLinkComponent } from './components/entrance/payment-link/payment-link.component';
import { PaymentSendOtpComponent } from './components/entrance/payment-send-otp/payment-send-otp.component';
import { PaymentRetrieveComponent } from './components/entrance/payment-retrieve/payment-retrieve.component';
import { PaymentVerifyComponent } from './components/entrance/payment-verify/payment-verify.component';
import { PaymentVerifyOtpComponent } from './components/entrance/payment-verify-otp/payment-verify-otp.component';
import { PreviewPhotoComponent } from './components/entrance/preview-photo/preview-photo.component';
import { SecretQuestionComponent } from './components/entrance/secret-question/secret-question.component';
import { SignInComponent } from './components/entrance/sign-in/sign-in.component';
import { ValidateCacComponent } from './components/entrance/validate-cac/validate-cac.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { FileDownloadComponent } from './components/file_uploader/file-download/file-download.component';
import { UploadFileComponent } from './components/file_uploader/upload-file/upload-file.component';
import { MerchantComponent } from './components/merchant/merchant.component';
import { AddUpdateComplianceComponent } from './components/merchant/add-update-compliance/add-update-compliance.component';
import { AddUpdatePayoutComponent } from './components/merchant/add-update-payout/add-update-payout.component';
import { AddTransactionPinComponent } from './components/merchant/add-transaction-pin/add-transaction-pin.component';
import { AuthenticationUpdatePasswordComponent } from './components/merchant/authentication-update-password/authentication-update-password.component';
import { AuthenticationUpdatePinComponent } from './components/merchant/authentication-update-pin/authentication-update-pin.component';
import { BankAddComponent } from './components/merchant/bank-add/bank-add.component';
import { ListBankComponent } from './components/merchant/list-bank/list-bank.component';
import { BanksComponent } from './components/merchant/banks/banks.component';
import { BvnCheckComponent } from './components/merchant/bvn-check/bvn-check.component';
import { BvnVerifyComponent } from './components/merchant/bvn-verify/bvn-verify.component';
import { ChangePasswordComponent } from './components/merchant/change-password/change-password.component';
import { DeleteComplianceComponent } from './components/merchant/delete-compliance/delete-compliance.component';
import { DeletePayoutComponent } from './components/merchant/delete-payout/delete-payout.component';
import { GetComplianceComponent } from './components/merchant/get-compliance/get-compliance.component';
import { GetPayoutComponent } from './components/merchant/get-payout/get-payout.component';
import { ProfileUpdateComponent } from './components/merchant/profile-update/profile-update.component';
import { TransactionPinChangeComponent } from './components/merchant/transaction-pin-change/transaction-pin-change.component';
import { TransactionPinCreateComponent } from './components/merchant/transaction-pin-create/transaction-pin-create.component';
import { TransactionPinUpdateComponent } from './components/merchant/transaction-pin-update/transaction-pin-update.component';
import { TransactionPinVerifyComponent } from './components/merchant/transaction-pin-verify/transaction-pin-verify.component';
import { UploadPhotographComponent } from './components/merchant/upload-photograph/upload-photograph.component';
import { WithdrawComponent } from './components/merchant/withdraw/withdraw.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { InitiateComponent } from './components/Transaction/initiate/initiate.component';
import { ListByMerchantEmailComponent } from './components/Transaction/list-by-merchant-email/list-by-merchant-email.component';
import { ListByMerchantComponent } from './components/Transaction/list-by-merchant/list-by-merchant.component';
import { SendOtpComponent } from './components/Transaction/send-otp/send-otp.component';
import { VerifyComponent } from './components/Transaction/verify/verify.component';
import { VerifyOtpComponent } from './components/Transaction/verify-otp/verify-otp.component';
import { PasswordMobileResetComponent } from './components/entrance/password-mobile-reset/password-mobile-reset.component';
import { DashboardOneComponent } from './components/merchant/dashboard-one/dashboard-one.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    IndexComponent,
    DashboardOneComponent,
    SectionOneComponent,
    SectionTwoComponent,

    SectionThreeComponent,
    SectionFourComponent,
    SectionFiveComponent,

    SidebarComponent,
    HomeComponent,
    HeaderComponent,
    EntranceComponent,
    UpdateAuthenticationPasswordComponent,
    UpdateAuthenticationPinComponent,
    MerchantPhotoComponent,
    OnboardComponent,
    PassChangesComponent,
    PasswordResetComponent,
    PasswordResetCompleteComponent,
    PayMerchantComponent,
    PayMerchantVerifyComponent,
    PaymentChargeRetrieveComponent,
    PaymentChargeRetrievePororationComponent,
    PaymentInitiateComponent,
    PaymentInstallmentComponent,
    PaymentLinkComponent,
    PaymentSendOtpComponent,
    PaymentRetrieveComponent,
    PaymentVerifyComponent,
    PaymentVerifyOtpComponent,
    PreviewPhotoComponent,
    SecretQuestionComponent,
    SignInComponent,
    ValidateCacComponent,
    FileUploaderComponent,
    FileDownloadComponent,
    UploadFileComponent,
    MerchantComponent,
    AddUpdateComplianceComponent,
    AddUpdatePayoutComponent,
    AddTransactionPinComponent,
    AuthenticationUpdatePasswordComponent,
    AuthenticationUpdatePinComponent,
    BankAddComponent,
    ListBankComponent,
    BanksComponent,
    BvnCheckComponent,
    BvnVerifyComponent,
    ChangePasswordComponent,
    DeleteComplianceComponent,
    DeletePayoutComponent,
    GetComplianceComponent,
    GetPayoutComponent,
    ProfileUpdateComponent,
    TransactionPinChangeComponent,
    TransactionPinCreateComponent,
    TransactionPinUpdateComponent,
    TransactionPinVerifyComponent,
    UploadPhotographComponent,
    WithdrawComponent,
    TransactionComponent,
    InitiateComponent,
    ListByMerchantEmailComponent,
    ListByMerchantComponent,
    SendOtpComponent,
    VerifyComponent,
    VerifyOtpComponent,
    PasswordMobileResetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
