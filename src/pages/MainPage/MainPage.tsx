import { memo } from 'react';
import CardList from "../../components/Card/CardList/CardList.tsx";

function MainPage() {
    return (
        <CardList />
    );
}

export default memo(MainPage);
