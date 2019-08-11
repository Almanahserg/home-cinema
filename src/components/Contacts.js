import React from 'react';

export const ContactsPage = () => (
    <div style={ {
        overflow: 'hidden',
        width: '80%',
        display: 'flex',
        alignItems: 'top',
        justifyContent: 'center',
        margin: '20px auto'
    } }>
        <iframe style={ {width: '700px', height: '400px', float: 'left'} }
                src="https://maps.google.com/maps?width=700&amp;height=400&amp;hl=en&amp;q=%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2+(%D0%9D%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed"
                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title='home-cinema'>
        </iframe>
        <div style={{paddingLeft: '10px'}}>
            <p>
                Телефон: +38 (099) 450-350-9<br/><br/>
                Адрес: Харьков, Площадь Конституции, д. 3/4<br/><br/>
                Email: almanahserg@gmail.com
            </p>
        </div>
    </div>
);