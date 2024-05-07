import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>,your digital partner</title>
        <link
          rel="stylesheet"
          href="/node_modules/bootstrap/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="path/to/font-awesome/css/font-awesome.min.css"
        ></link>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        
        {/* Google Ads Conversion Tracking Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11367946432"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11367946432');
          `
        }}></script>
        
      </Head>
      <body>
        <Main />
        <NextScript />

        <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
        ></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="script.js"></script>
        <script src="/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

        {/* Google Ads Event Snippet */}
        <script dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {'send_to': 'AW-11367946432/z2_kCMmd65QZEMCx1Kwq'});
          `
        }}></script>
        
      </body>
    </Html>
  );
}




