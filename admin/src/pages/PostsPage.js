import { filter } from "lodash";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
// @mui
import {
  Button,
  Card,
  Container,
  IconButton,
  MenuItem,
  Paper,
  Popover,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
// components
import Iconify from "../components/iconify";
import Label from "../components/label";
import Scrollbar from "../components/scrollbar";
// sections
import { UserListHead } from "../sections/@dashboard/user";
// mock
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import USERLIST from "../_mock/user";
import { approvePostAction, getAllNotApprovePostAction } from "../reducer/actions/postAction";
import { clearMessage } from "../reducer/slice/postSlice";
import PostsAprevePage from "./PostsAprevePage";
import { useNavigate } from "react-router-dom";
// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "title", label: "Tiêu đề", alignRight: false },
  { id: "descriptions", label: "Mô tả", alignRight: false },
  { id: "requirement", label: "Yêu cầu", alignRight: false },
  { id: "expired", label: "Ngày hết Hạn", alignRight: false },
  { id: "status", label: "Trang thái", alignRight: false },
  { id: "" },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function PostsPage() {
  const dispatch = useDispatch();
  const { notApprove, approveSuccess } = useSelector((state) => state.post);
  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState("asc");

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState("title");

  const [filterName, setFilterName] = useState("");

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();
  const handleOpenMenu = (e) => {
    dispatch(approvePostAction(e));
    navigate("/dashboard/posts");
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  useEffect(() => {
    dispatch(clearMessage());
    if (approveSuccess === true) {
      dispatch(getAllNotApprovePostAction());
    }
    dispatch(getAllNotApprovePostAction());
  }, [dispatch, approveSuccess]);

  return (
    <>
      <Helmet>
        <title> Dashboard - Posts </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Quản lý bài đăng
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            Thêm bài đăng
          </Button>
        </Stack>

        <Card>
          {/* <UserListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          /> */}

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {notApprove?.data?.length !== 0 &&
                    notApprove?.data
                      ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      ?.map((row) => {
                        const { id, title, descriptions, status, requirement, expired } = row;
                        // const selectedUser = selected.indexOf(name) !== -1;

                        return (
                          <TableRow
                            hover
                            key={id}
                            tabIndex={-1}
                            // selected={selectedUser}
                          >
                            <TableCell component="th" scope="row" padding="2px">
                              <Stack direction="row" alignItems="center" spacing={2}>
                                {/* <Avatar alt={name} src={avatarUrl} /> */}
                                <Typography variant="subtitle2" noWrap>
                                  <div
                                    style={{
                                      color: "black",
                                      height: "47px",
                                      width: "200px",
                                      overflow: "hidden",
                                      display: "-webkit-box",
                                      WebkitLineClamp: 1,
                                      WebkitBoxOrient: "vertical",
                                    }}
                                  >
                                    {title}
                                  </div>
                                </Typography>
                              </Stack>
                            </TableCell>

                            <TableCell align="left">
                              <div
                                style={{
                                  color: "black",
                                  height: "47px",
                                  overflow: "hidden",
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                }}
                              >
                                {descriptions}
                              </div>
                            </TableCell>

                            <TableCell align="left">
                              <div
                                style={{
                                  color: "black",
                                  height: "47px",
                                  overflow: "hidden",
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                }}
                              >
                                {requirement}
                              </div>
                            </TableCell>
                            <TableCell align="left">{expired}</TableCell>

                            <TableCell align="left">
                              <Label color={status === 0 ? "error" : "success"}>
                                {status === 0 ? "Chờ duyệt" : "Đã duyệt"}
                              </Label>
                              {/* {status} */}
                            </TableCell>

                            <TableCell align="right">
                              <IconButton
                                size="small"
                                // color='inherit'
                                onClick={() => handleOpenMenu(id)}
                              >
                                <MenuItem>
                                  <Iconify icon={"eva:edit-fill"} sx={{ mr: 2 }} />
                                  Duyệt
                                </MenuItem>
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: "center",
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={notApprove?.data?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem>
          <Iconify icon={"eva:edit-fill"} sx={{ mr: 2 }} />
          Duyệt
        </MenuItem>

        {/* <MenuItem sx={{ color: "error.main" }}>
          <Iconify icon={"eva:trash-2-outline"} sx={{ mr: 2 }} />
          Delete
        </MenuItem> */}
      </Popover>
    </>
  );
}
