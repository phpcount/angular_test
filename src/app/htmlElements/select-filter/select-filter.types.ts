interface ItemList {
    id: string;
    label: string;
    show?: boolean;
    disabled?: boolean;
}

interface ItemListGroup {
    disabled?: boolean;
    group_name: string;
    list: ItemList[];
}
