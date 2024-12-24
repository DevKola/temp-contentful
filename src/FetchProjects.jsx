import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export function useFetchProjects() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    try {
      const res = await client.getEntries({ content_type: "projects" });

      const data = res?.items.map(item => {
        const newData = {
          id: item.sys.id,
          title: item?.fields?.title,
          url: item?.fields?.url,
          image: item?.fields?.image?.fields?.file?.url,
        };
        return newData;
      });
      setProjects([...data]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { isLoading, projects };
}
