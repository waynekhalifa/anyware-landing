import { selectAction, setAction } from "./../store/appSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSlug,
  selectDateRange,
  selectModalContent,
  selectModalID,
  selectModalOpen,
  selectSession,
  selectSnackBarContent,
  selectSnackBarOpen,
  selectSnackBarPersist,
  selectSnackBarSeverity,
  setSession,
  setModal,
  setSnackBar,
  setDateRange,
  setSlug,
} from "@/store/appSlice";
import { useRouter } from "next/router";

const useApp = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const slug = useSelector(selectSlug);
  const action = useSelector(selectAction);
  const session = useSelector(selectSession);
  const modalOpen = useSelector(selectModalOpen);
  const modalID = useSelector(selectModalID);
  const modalContent = useSelector(selectModalContent);
  const snackBarOpen = useSelector(selectSnackBarOpen);
  const snackBarSeverity = useSelector(selectSnackBarSeverity);
  const snackBarContent = useSelector(selectSnackBarContent);
  const snackBarPersist = useSelector(selectSnackBarPersist);
  const dateRange = useSelector(selectDateRange);

  return {
    slug,
    action,
    session,
    modalOpen,
    modalID,
    modalContent,
    snackBarOpen,
    snackBarSeverity,
    snackBarContent,
    snackBarPersist,
    dateRange,
    setSlug: (slug: string) => dispatch(setSlug(slug)),
    setAction: (action: string) => dispatch(setAction(action)),
    setSession: (session: any) => dispatch(setSession(session)),
    clearSession: () => {
      dispatch(setSession(null));
    },
    showConfirm: (message: string) =>
      dispatch(
        setSnackBar({
          snackBarOpen: true,
          snackBarContent: message,
          snackBarSeverity: "success",
        })
      ),
    showError: (error: any) => {
      console.log("======= ERROR =======", error);
      dispatch(
        setSnackBar({
          snackBarOpen: true,
          snackBarContent: `${error}`,
          snackBarSeverity: "error",
          snackBarPersist: true,
        })
      );
    },
    closeSnackBar: () =>
      dispatch(
        setSnackBar({
          snackBarOpen: false,
          snackBarSeverity: "info",
          snackBarContent: "",
          snackBarPersist: false,
        })
      ),
    openModal: (payload: any) =>
      dispatch(setModal({ ...payload, modalOpen: true })),
    closeModal: () =>
      dispatch(setModal({ modalOpen: false, modalID: "", modalContent: null })),
    navigateTo: (url: string) => push(url),
    changeDateRange: (dateRange: any) => dispatch(setDateRange(dateRange)),
  };
};

export default useApp;
