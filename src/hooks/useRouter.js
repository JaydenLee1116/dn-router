const useRouter = () => {
  const push = (path) => {
    window.history.pushState({}, null, path);
  }
  return { push }
}

export default useRouter;