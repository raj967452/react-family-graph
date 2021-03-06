import React, { Fragment } from 'react';

const ParentData = ({ ...childData }) => {
    console.log(childData);
    return (
        <Fragment>
            <div className="d-flex justify-content-start flex-wrap">
                {childData && Object.entries(childData).map(([labelKey, labelValue], i) => (
                    <div key={`${labelValue}_${labelKey}`} className="d-flex text-left px-4 w-50">
                        <img alt='' className='sub-card-img-profile rounded-circle' src='https://it.gravatar.com/userimage/3434071/205a00fc16ae537b26b56f40790910fe.jpg?size=50' />
                        <div className="ml-3">
                            <h4 className="h6">{labelValue.name}</h4>
                            <p className="mb-0 text-muted">{labelValue.personalData.relation}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
};

export { ParentData };
