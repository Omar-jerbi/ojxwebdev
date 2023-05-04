"use client"
import { NextSeo } from "next-seo";
import { metadata } from './layout';


export function NSeo({ }) {
    return <NextSeo title={metadata.title} description={metadata.description} openGraph={{
        title: metadata.title,
        description: metadata.description,
        url: metadata.openGraph.url,
        siteName: metadata.openGraph.siteName,
        type: metadata.openGraph.type,
        locale: metadata.openGraph.locale
    }} twitter={{
        handle: "@OJXwebdev",
        site: "OJXwebdev.com",
        cardType: "summary_large_image"
    }} />;
}
