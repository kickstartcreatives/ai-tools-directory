import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Tool } from '../lib/types';

export function useTools() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTools() {
      try {
        const { data, error } = await supabase
          .from('tools')
          .select('*')
          .order('name', { ascending: true });

        if (error) throw error;

        setTools(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchTools();
  }, []);

  return { tools, loading, error };
}
