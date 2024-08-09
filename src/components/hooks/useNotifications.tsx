// hooks/useNotifications.ts
"use client";
import { useState, useEffect } from 'react';
import { db, onMessageListener } from '../../lib/firebaseConfig';
import { collection, addDoc, query, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { Notification } from './types'; 

const notificationsRef = collection(db, 'notifications');

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const q = query(notificationsRef);
    const unsubscribeFirestore = onSnapshot(q, (querySnapshot) => {
      const newNotifications: Notification[] = [];
      querySnapshot.forEach((doc) => {
        newNotifications.push({ id: doc.id, ...doc.data() } as Notification);
      });
      setNotifications(newNotifications);
    });

    onMessageListener()
      .then((payload: any) => {
        if (payload.notification?.body) {
          addNotification('info', payload.notification.body);
        }
      })
      .catch(err => console.log('Failed to receive FCM message:', err));

    return () => {
      unsubscribeFirestore();
    };
  }, []);

  const addNotification = async (type: 'info' | 'warning' | 'error', message: string) => {
    await addDoc(notificationsRef, { type, message, read: false });
  };

  const markAsRead = async (id: string) => {
    const notificationRef = doc(db, 'notifications', id);
    await updateDoc(notificationRef, { read: true });
  };

  return { notifications, addNotification, markAsRead };
}
