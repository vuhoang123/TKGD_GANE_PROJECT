import { lazy } from "react";

const Payment = lazy(() => import("./../Pages/Payment/Payment"));
const PaymentDetail = lazy(() => import("./../Pages/PaymentDetail/PaymentDetail"));

export const PaymentTemplateRoutes = [
    { path: "/payment", Element: Payment },
    { path: "/paymentDetail", Element: PaymentDetail },

];
