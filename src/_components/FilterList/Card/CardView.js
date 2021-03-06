import React, { Fragment } from 'react';
import './cardView.css';
import { ParentData } from './ParentData';



const CardView = ({ ...props }) => {
    const childData = props.children;
    console.log(childData);
    return (
        <Fragment>
            <div className='card card-profile text-center'>
                <img alt='' className='card-img-top' src='https://unsplash.it/340/160?image=354' />
                <div className='card-block p-3'>
                    <img alt='' className='card-img-profile' src='https://it.gravatar.com/userimage/3434071/205a00fc16ae537b26b56f40790910fe.jpg?size=140' />
                    <h3 className='card-title'>{props.name} <small>{props.personalData.relation || 'Unkown'}</small></h3>
                    <ul className="social-links list-inline d-flex justify-content-center">
                        <li><a title="" href="" data-original-title="Facebook"><i className="fa fa-facebook"></i></a></li>
                        <li><a title="" href="" data-original-title="Twitter"><i className="fa fa-twitter"></i></a></li>
                        <li><a title="" href="" data-original-title="Skype"><i className="fa fa-skype"></i></a></li>
                    </ul>
                </div>
                <div className="mt-4">
                    {childData && <ParentData {...childData} />}
                </div>
            </div>

        </Fragment>
    )
};


export { CardView };

/*
{props.children && Object.keys(props.children).map((name, i) => (
                        <li key={`${name}-${i}`}>
                            {name}: {props.children[i].name}
                        </li>
                    ))}
                <li key={`${name}-${index}`}>{name[index].name}</li>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {props.children &&
                        Object.keys(props.children).map((name, i) => (
                            <li key={`${name}-${i}`}>
                                {name}: {props.children[name]}
                            </li>
                        ))}
                </ul>
*/