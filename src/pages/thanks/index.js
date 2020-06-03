import Layout from '@components/Layouts';
import { withTranslation } from '@i18n';
import { getCheckoutDataFromRequest } from '@helpers/cookies';
import redirect from 'next-redirect';
import Content from './component';

const Page = (props) => {
    const { t } = props;
    const pageConfig = {
        title: t('checkout:thanks'),
        bottomNav: false,
    };
    return (
        <Layout pageConfig={pageConfig} {...props}>
            <Content {...props} />
        </Layout>
    );
};

Page.getInitialProps = async (ctx) => {
    const checkoutData = getCheckoutDataFromRequest(ctx);
    if (!checkoutData) redirect(ctx, '/');
    return {
        query: ctx.query,
        checkoutData,
        namespacesRequired: ['common', 'checkout'],
    };
};

export default withTranslation()(Page);
