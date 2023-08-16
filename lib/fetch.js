 export default const fetchMoreData = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select()
      .range(page * 10, (page + 1) * 10 - 1);

    if (data.length === 0 || error) {
      setHasMore(false);
      return;
    }

    setPage(page + 1);
    // обновить posts с новыми данными
  };