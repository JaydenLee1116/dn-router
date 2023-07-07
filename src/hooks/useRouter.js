const useRouter = () => {
  const push = (path) => {
    window.location.pathname = path;
  }
  return { push }
}

export default useRouter;