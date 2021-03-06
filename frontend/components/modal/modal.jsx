import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import PostFormContainer from '../home/post_form_container';
import EditFormContainer from '../home/edit_form_container';
import PostView from '../post/post_view'

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal.type) {
        case "postView":
            component = <PostView postId={modal.options.post.id}
                                  userId={modal.options.thisUser.id} />;
            break;
        case 'postForm':
            component = <PostFormContainer />;
            break;
        case 'editForm':
            component = <EditFormContainer />;
            break;
        default:
            return null;
    }
    

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
