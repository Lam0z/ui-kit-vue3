<script setup>
import { ref, computed } from "vue";

import TableRow from "@/components/Table/TableRow.vue";
import BaseTable from "../components/Table/BaseTable.vue";
import TableColumn from "../components/Table/TableColumn.vue";
import Button from "../components/Button.vue";

const tableHeads = ["id", "Author", "Title", "Cover", ""];
const tableSizeColumns = "50px 1fr 2fr 150px 140px";
const sortField = ref("id");
const typeSort = ref("asc");

const books = ref([
    {
        id: 1,
        author: "Dmitry Glukhovsky",
        title: "Metro 2033",
        image: "https://m.media-amazon.com/images/I/811HITbWChL._SL1500_.jpg",
        bg: "#FFA26B",
    },
    {
        id: 12,
        author: "James Clear",
        title: "Atomic Habits: An Easy",
        image: "https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg",
        bg: "#00C48C",
    },
    {
        id: 2,
        author: "J. K. Rowling",
        title: "Harry Potter and the Order of the Phoenix",
        image: "https://m.media-amazon.com/images/I/71nKtAPngQL._SL1500_.jpg",
        bg: "#00C48C",
    },
]);

const setSort = (name) => {
    if (sortField.value === name) {
        if (typeSort.value === "asc") {
            typeSort.value = "desc";
        } else {
            typeSort.value = "asc";
        }
    } else {
        sortField.value = name;
    }
};

const booksSorting = computed(() => {
    return books.value.sort((a, b) => {
        let modifier = 1;
        if (typeSort.value === "desc") modifier = -1;
        if (a[sortField.value] < b[sortField.value]) return -1 * modifier;
        if (a[sortField.value] > b[sortField.value]) return 1 * modifier;
        return 0;
    });
});
</script>
<template lang="">
    <h1 class="heading-1">Table</h1>
    <span> sort field: {{ sortField }}</span> <br />
    <span> type sort: {{ typeSort }}</span>
    <BaseTable
        :head="tableHeads"
        :columnsTemplates="tableSizeColumns"
        @sorting="setSort"
    >
        <TableRow
            v-for="(item, key, i) in booksSorting"
            :key="item.id"
            :columnsTemplates="tableSizeColumns"
            :bgRow="item.bg"
        >
            <table-column :columnTitle="tableHeads[0]">
                {{ item.id }}
            </table-column>
            <table-column :columnTitle="tableHeads[1]">
                {{ item.author }}
            </table-column>
            <table-column :columnTitle="tableHeads[2]">
                {{ item.title }}
            </table-column>
            <table-column :image="true" :srcImage="item.image"> </table-column>
            <table-column>
                <Button label="Button" />
            </table-column>
        </TableRow>
    </BaseTable>
</template>

<style lang=""></style>
