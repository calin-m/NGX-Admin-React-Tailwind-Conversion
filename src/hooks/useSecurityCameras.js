import { useState, useEffect } from 'react';

/**
 * useSecurityCameras Custom Hook
 * Translated from Angular @Injectable() RxJS Service: @core/mock/security-cameras.service.ts
 */
export function useSecurityCameras() {
  const [cameras, setCameras] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const timer = setTimeout(() => {
      if (isMounted) {
        const domainCameras = [
          { id: 1, title: 'Camera #1', source: 'assets/images/camera1.jpg', status: 'Active' },
          { id: 2, title: 'Camera #2', source: 'assets/images/camera2.jpg', status: 'Active' },
          { id: 3, title: 'Camera #3', source: 'assets/images/camera3.jpg', status: 'Paused' },
          { id: 4, title: 'Camera #4', source: 'assets/images/camera4.jpg', status: 'Active' }
        ];
        setCameras(domainCameras);
        setSelectedCamera(domainCameras[0]);
        setLoading(false);
      }
    }, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  return {
    cameras,
    data: cameras,
    selectedCamera,
    setSelectedCamera,
    loading,
    error
  };
}

export default useSecurityCameras;
