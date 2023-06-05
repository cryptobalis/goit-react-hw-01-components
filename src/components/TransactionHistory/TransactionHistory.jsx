import PropTypes from 'prop-types';

import * as S from './TransactionHistory.styled';

export default function TransactionHistory ({ items }) {

    return (
        <S.TransactionHistory>
            <S.Head>
                <S.TrHead>
                    <S.ThHead>Type</S.ThHead>
                    <S.ThHead>Amount</S.ThHead>
                    <S.ThHead>Currency</S.ThHead>
                </S.TrHead>
            </S.Head>
            <S.Body>
                {items.map(({ id, type, amount, currency}) => {
                    return (
                    <S.TrBody key={id}>
                        <S.TdBody>{type.charAt(0).toUpperCase() + type.slice(1)}</S.TdBody>
                        <S.TdBody>{amount}</S.TdBody>
                        <S.TdBody>{currency}</S.TdBody>
                    </S.TrBody>
                    );
                })}
            </S.Body>

        </S.TransactionHistory>

    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        })
    ).isRequired
};