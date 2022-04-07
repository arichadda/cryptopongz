import React from "react";
import Helmet from "react-helmet";
import Settings from "../settings/settings.json";

export const HelmetMeta = () => {
    return (
        <Helmet>
            <meta name="theme-color" content={Settings.colors.primary} />
            <title>{'CRYPTOPONGZ'}</title>
            <meta name="author" content={'Ari Chadda'} />
            <meta name="description" content={'3,933 Playtpii Partying on the Solana Blockchain'} />
            <meta name="keywords" content={['cryptopongz', 'nfts', 'blockchain']} />
        </Helmet>
    );
};
