import Head from "next/head";
import A from "../components/A";

const MainContainer = ({children, keywords}) => {
    return (
        <>
        <Head>
            <meta keywords={'nextjs' + keywords}></meta>
            <title>MainPage</title>
        </Head>

            <div className="navbar">
                <A className='link' href={'/'} text='Main' />
                <A className='link' href={'/users'} text='Users' />   
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        background: grey;
                        padding: 15px;
                        text-decoration: none;
                    }
                `}
            </style>
        </>
    )
}

export default MainContainer;