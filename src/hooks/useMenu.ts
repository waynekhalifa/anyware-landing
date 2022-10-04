import { useDispatch, useSelector } from "react-redux";
import {
  setSelected,
  setSearchText,
  selectListing,
  selectSelected,
  selectSearchText,
} from "@/store/menuSlice";
import { HeadCell } from "@/models/dataTable";

const useResource = (listingName: string, singleName: string) => {
  const dispatch = useDispatch();

  const listing = useSelector(selectListing);
  const searchText = useSelector(selectSearchText);
  const selected = useSelector(selectSelected);

  async function fetch() {}

  async function byName() {}

  async function get(id: string) {}

  async function create(data: any) {}

  async function update(id: string, data: any) {}

  async function trash(id: string) {}

  async function bulkTrash(ids: any) {}

  async function remove(id: any) {}

  const headCells: readonly HeadCell[] = [
    {
      id: "siteTitle",
      numeric: false,
      disablePadding: false,
      label: "Site Title",
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

  const dataCells: readonly string[] = ["siteTitle"];

  const options: any[] = [];

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
