import { Helmet } from "react-helmet-async";
// @mui
import { Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// components
import Iconify from "../components/iconify";
// sections
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppTasks, AppTrafficBySite, AppWidgetSummary } from "../sections/@dashboard/app";
import { getAllUserAction, getUserAction } from "./../reducer/actions/userAction";
import { getAllNotApprovePostAction, getAllPostAction } from "./../reducer/actions/postAction";

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { account } = useSelector((state) => state.account);
  const { users } = useSelector((state) => state.user);
  const { posts, notApprove } = useSelector((state) => state.post);

  useEffect(() => {
    // if(account?.í)
    dispatch(getUserAction(account?.data?.id));
    dispatch(getAllPostAction());
    dispatch(getAllUserAction({}));
    dispatch(getAllNotApprovePostAction());
  }, [dispatch, account]);
  return (
    <>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Xin chào
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary
              title="Số lượng bài đăng"
              total={posts?.data?.length}
              icon={"ant-design:android-filled"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary
              title="Số lượng người dùng"
              total={users?.data?.length}
              color="info"
              icon={"ant-design:apple-filled"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary
              title="Số lượng bài đăng chờ duyệt"
              total={notApprove?.data?.length}
              color="warning"
              icon={"ant-design:windows-filled"}
            />
          </Grid>

          {/* <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Bug Reports"
              total={234}
              color="error"
              icon={"ant-design:bug-filled"}
            />
          </Grid> */}

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: "FaceBook",
                  value: 323234,
                  icon: <Iconify icon={"eva:facebook-fill"} color="#1877F2" width={32} />,
                },
                {
                  name: "Google",
                  value: 341212,
                  icon: <Iconify icon={"eva:google-fill"} color="#DF3E30" width={32} />,
                },
                {
                  name: "Linkedin",
                  value: 411213,
                  icon: <Iconify icon={"eva:linkedin-fill"} color="#006097" width={32} />,
                },
                {
                  name: "Twitter",
                  value: 443232,
                  icon: <Iconify icon={"eva:twitter-fill"} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: "1", label: "Create FireStone Logo" },
                { id: "2", label: "Add SCSS and JS files if required" },
                { id: "3", label: "Stakeholder Meeting" },
                { id: "4", label: "Scoping & Estimations" },
                { id: "5", label: "Sprint Showcase" },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
