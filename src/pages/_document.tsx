import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="apple-touch-icon" sizes="57x57" href="https://res.cloudinary.com/dvme554nj/image/upload/v1671519038/nbdyknows/apple-icon-57x57_lmffok.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="https://res.cloudinary.com/dvme554nj/image/upload/v1671519038/nbdyknows/apple-icon-60x60_lh7a1x.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="https://res.cloudinary.com/dvme554nj/image/upload/v1671519038/nbdyknows/apple-icon-72x72_dvhxgm.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="https://res.cloudinary.com/dvme554nj/image/upload/v1671519038/nbdyknows/apple-icon-60x60_lh7a1x.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="https://res.cloudinary.com/dvme554nj/image/upload/v1671519038/nbdyknows/apple-icon-114x114_sucysr.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="https://res.cloudinary.com/dvme554nj/image/upload/v1671519038/nbdyknows/apple-icon-120x120_xsglxl.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="https://res.cloudinary.com/dvme554nj/image/upload/v1671519038/nbdyknows/apple-icon-144x144_lqbf9j.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="https://res.cloudinary.com/dvme554nj/image/upload/v1671519038/nbdyknows/apple-icon-152x152_yew449.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/dvme554nj/image/upload/v1671519038/nbdyknows/apple-icon-180x180_c0czzp.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="https://res.cloudinary.com/dvme554nj/image/upload/v1671519038/nbdyknows/android-icon-192x192_ctxswl.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="https://res.cloudinary.com/dvme554nj/image/upload/v1671519037/nbdyknows/favicon-32x32_vrl6jg.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="https://res.cloudinary.com/dvme554nj/image/upload/v1671519037/nbdyknows/favicon-96x96_s7cine.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="https://res.cloudinary.com/dvme554nj/image/upload/v1671519038/nbdyknows/favicon-16x16_un5ayx.png" />
          <link rel="manifest" href="https://res.cloudinary.com/dvme554nj/raw/upload/v1671519037/nbdyknows/manifest_o66mzq.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="https://res.cloudinary.com/dvme554nj/image/upload/v1671519037/nbdyknows/ms-icon-144x144_ckwdqb.png" />
          <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
          <script
            async
            src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"
          ></script>
          <div
            id="snipcart"
            data-config-modal-style="side"
            data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
            hidden
          >
            <address-fields section="top">
              <div className="snipcart-form__field">
                <snipcart-label for="phone">Phone number</snipcart-label>
                <snipcart-input name="phone"></snipcart-input>
              </div>
            </address-fields>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
