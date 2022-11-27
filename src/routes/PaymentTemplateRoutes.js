import { lazy } from "react";

const Payment = lazy(() => import("./../Pages/Payment/Payment"));

export const PaymentTemplateRoutes = [{ path: "/payment", Element: Payment }];
