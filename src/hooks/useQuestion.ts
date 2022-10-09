import { useDispatch, useSelector } from "react-redux";
import {
  setSelected,
  setSearchText,
  selectListing,
  selectSelected,
  selectSearchText,
} from "@/store/questionSlice";

import { HeadCell } from "@/models/dataTable";

import useApp from "./useApp";

const useResource = (listingName: string, singleName: string) => {
  const dispatch = useDispatch();
  const { session, showConfirm, showError } = useApp();
  const listing = useSelector(selectListing);
  const searchText = useSelector(selectSearchText);
  const selected = useSelector(selectSelected);

  async function fetch() {
    try {
    } catch (err: Error | any) {
      showError(err);
    }
  }

  async function get(id: string) {
    try {
    } catch (err: Error | any) {
      showError(err);
    }
  }

  async function create(data: any) {
    try {
    } catch (err: Error | any) {
      showError(err);
    }
  }

  async function update(id: string, data: any) {
    try {
    } catch (err: Error | any) {
      showError(err);
    }
  }

  async function trash(id: string) {
    try {
    } catch (err: Error | any) {
      showError(err);
    }
  }

  async function bulkTrash(ids: any) {
    for (let id of ids) {
      try {
      } catch (err: Error | any) {
        showError(err);
      }
    }
  }

  async function remove(id: any) {
    try {
    } catch (err: Error | any) {
      showError(err);
    }
  }

  const headCells: readonly HeadCell[] = [
    {
      id: "name",
      numeric: false,
      disablePadding: false,
      label: "Name",
    },
    {
      id: "createdBy",
      numeric: false,
      disablePadding: false,
      label: "Created By",
    },
    {
      id: "createdAt",
      numeric: false,
      disablePadding: false,
      label: "Date",
    },
    {
      id: "actions",
      numeric: true,
      disablePadding: false,
      label: "",
    },
  ];

  const dataCells: readonly string[] = ["name"];

  const options: any[] = [{ label: "None", value: "-1" }];

  for (let option of listing) {
    options.push({ label: option.name, value: option.id });
  }

  const api: any = {};

  api[`${listingName}Listing`] = listing;
  api[`${listingName}Options`] = options;
  api[`${listingName}SearchText`] = searchText;
  api[`${listingName}HeadCells`] = headCells;
  api[`${listingName}DataCells`] = dataCells;
  api[`${listingName}Selected`] = selected;
  api[`${listingName}Fetch`] = fetch;
  api[`${listingName}Get`] = get;
  api[`${listingName}Create`] = create;
  api[`${listingName}Update`] = update;
  api[`${listingName}Trash`] = trash;
  api[`${listingName}BulkTrash`] = bulkTrash;
  api[`${listingName}Delete`] = remove;
  api[`${listingName}ChangeSearchText`] = (searchText: string) =>
    dispatch(setSearchText(searchText));
  api[`${listingName}ChangeSelected`] = (id: string) =>
    dispatch(setSelected(id));

  return api;
};

export default useResource;
