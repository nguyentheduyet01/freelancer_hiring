import { useState } from "react";
import { useNavigate } from "react-router-dom";
// @mui
import { LoadingButton } from "@mui/lab";
import { Checkbox, IconButton, InputAdornment, Link, Stack, TextField } from "@mui/material";
// components
import { useDispatch, useSelector } from "react-redux";
import Iconify from "../../../components/iconify";
import { loginAction } from "../../../reducer/actions/accountAction";
import { useEffect } from "react";

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [account, setAccount] = useState({});
  const { account: user } = useSelector((state) => state.account);

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(account));
    navigate("/dashboard", { replace: true });
  };

  // const navigate = useNavigate();
  useEffect(() => {
    if (user?.isSuccess === true) {
      navigate("/dashboard");
    }
  }, [user, navigate]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField name='username' label='Email address' onChange={handleChange} />

          <TextField
            name='password'
            label='Password'
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge='end'>
                    <Iconify icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={handleChange}
          />
        </Stack>

        <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ my: 2 }}>
          <Checkbox name='remember' label='Remember me' />
          <Link variant='subtitle2' underline='hover'>
            Quên mật khẩu?
          </Link>
        </Stack>
        <LoadingButton fullWidth size='large' type='submit' variant='contained'>
          Đăng nhập
        </LoadingButton>
      </form>
    </>
  );
}
