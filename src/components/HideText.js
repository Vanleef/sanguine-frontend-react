import React from 'react';

const HideText = (props) => {
    const[showTexts, setShowTexts] = React.useState(false);
    const onClickShow = () => {
        if (!showTexts)
            setShowTexts(true);
        else
            setShowTexts(false);
    };

    return (
        <div class="card">
            <div class="card-header">
                <div class="mb-0">
                    <h5 class="faq-title" onClick={onClickShow}>
                        <span class="badge">{props.number}</span>{props.textButton}
                    </h5>
                </div>
            </div>
            {/* TEXTO EH MOSTRADO E ESCONDIDO AO CLICAR NO faq-title */}
            { showTexts ? <HiddenText text={ props.textDisplay }/> : null }
        </div>
    );
};

const HiddenText = (props) => {
    return (
        <div class="collapse">
            <div class="card-body">
                <p>{props.text}</p>
            </div>
        </div>
    )
};

export default HideText;