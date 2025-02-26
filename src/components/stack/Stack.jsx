import React from 'react';
import './Stack.css'

const Stack = () => {
    return (
        <section className='stack container'>
            <h2 className="section__title">
                Stack of technologies I use/or have experience:
            </h2>
            <div className="stack__container">
                <div className="stack__item">
                    <h2 className="item__title">Frontend:</h2>
                    <h3 className='item__text'>- React/Typescript: Worked with React и Next.js, using different state-managers Redux, Redux Toolkit (RTK), MobX, Zustand.</h3>
                    <h3 className='item__text'>- Flutter: Worked with Flutter/dart. Used state-manager bloc.</h3>
                    <h3 className='item__text'>- Webpack: Created webpack configuration from scratch, including development, tesing and production, optimized configuration, plagins and loaders.</h3>
                    <h3 className='item__text'>- Linters: Made full ecosystem of linters: ESLint, Prettier, Stylelint, Husky, PostCSS, Babel and other instruments.</h3>
                    <h3 className='item__text'>- UI Kit: Worked with UI Kit Storybook and Loki, creadted documentated components.</h3>
                    <h3 className='item__text'>- Frontend libraries: Formik/React Hook Form, Three.js, ECharts, MUI (Material UI), Ant Design, Axios, React Query, SWR, i18next, Jest, React Testing Library, Cypress</h3>
                </div>
                <div className="stack__item">
                    <h2 className="item__title">Backend and DB:</h2>
                    <h3 className='item__text'>- Worked with SQL (PostgreSQL) and NoSQL (MongoDB) data bases.</h3>
                    <h3 className='item__text'>- Made integrations with email and sms services.</h3>
                    <h3 className='item__text'>- Made OAuth authorization integration Google, Telegram.</h3>
                    <h3 className='item__text'>- Used Nest.js and sequelize.</h3>
                </div>
                <div className="stack__item">
                    <h2 className="item__title">DevOps:</h2>
                    <h3 className='item__text'>- Configured CI/CD and deploy stage and production using pipelines, including Docker compose</h3>
                </div>
                <div className="stack__item">
                    <h2 className="item__title">My repositories and projects:</h2>
                    <div className="item__container">
                        <h3 className='item__text gitlab'><a href='https://gitlab.com/maxMeur' target='_blank'>Gitlab</a></h3>
                        <h3 className='item__text npm'><a href='https://www.npmjs.com/package/web-neurosdk2' target='_blank'>Npm-module</a></h3>
                        <h3 className='item__text mac'><a href='https://apps.apple.com/ru/app/mind-tracker-bci/id6738744122?mt=12' target='_blank'>Flutter(Mac)</a></h3>
                        <h3 className='item__text win'><a href='https://apps.microsoft.com/detail/XPFMG7FQB1X3PS?hl=ru&gl=RU&ocid=pdpshare' target='_blank'>Flutter(Windows)</a></h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stack;