import { useEffect, useState } from 'react';

import { getQuickstartFilesFromLocal } from '../utils/preview/fetchHelpers';
import { parseRawQuickstartFiles } from '../utils/preview/parseHelpers';
import { navigate } from 'gatsby';

const useLocalhostQuickstart = (location) => {
  const [quickstart, setQuickstart] = useState();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const port = urlParams.get('port') || 3000;

    /*
     * Async function to get quickstart files from local
     * and set to state variable
     **/
    const fetchFiles = async () => {
      let rawFileContent;

      try {
        rawFileContent = await getQuickstartFilesFromLocal(port);
      } catch (err) {
        navigate('/');
        return;
      }

      const quickstart = await parseRawQuickstartFiles(rawFileContent);
      setQuickstart(quickstart);
    };

    fetchFiles();
  }, []);

  return quickstart;
};

export default useLocalhostQuickstart;