import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DetailPageAction from '../components/DetailPageAction';
import { showFormattedDate } from '../utils';
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from '../utils/local-data';

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  const onArchiveHandler = (id) => {
    archiveNote(id);
    navigate('/');
  };

  const onUnarchiveHandler = (id) => {
    unarchiveNote(id);
    navigate('/');
  };

  const onDeleteHandler = (id) => {
    deleteNote(id);
    navigate('/');
  };

  return (
    <DetailPage
      id={id}
      onArchiveHandler={onArchiveHandler}
      onUnarchiveHandler={onUnarchiveHandler}
      onDeleteHandler={onDeleteHandler}
    />
  );
}

class DetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNote(props.id),
    };
  }

  render() {
    const { id, title, createdAt, body, archived } = this.state.notes;
    return (
      <section className="detail-page">
        <h3 className="detail-page__title">{title}</h3>
        <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
        <div className="detail-page__body">{body}</div>
        <DetailPageAction
          id={id}
          title={title}
          archived={archived}
          archiveNote={this.props.onArchiveHandler}
          unArchiveNote={this.props.onUnarchiveHandler}
          deleteNote={this.props.onDeleteHandler}
        />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  onArchiveHandler: PropTypes.func.isRequired,
  onUnarchiveHandler: PropTypes.func.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
