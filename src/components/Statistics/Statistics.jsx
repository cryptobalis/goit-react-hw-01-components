import PropTypes from 'prop-types';

import * as S from './Statistics.styled';

export default function Statistics({ title, stats}) {

    return (
        <S.Container>
            {title ? (<S.Title>{title}</S.Title>) : (
           <S.List>
           {stats.map(({id, label, percentage }) => {
              return (
                <S.ListItem key={id}>
                    <S.Label>{label}</S.Label>
                    <S.Percentage>{percentage}%</S.Percentage>
                </S.ListItem>
              );
            })}
            </S.List>
            )}
           

        </S.Container>
    );
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    ).isRequired
};