import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Contact } from '../types/generalTypes';

type ContactContextType = {
	contacts: Contact[];
	addContact: (contact: Contact) => void;
	removeContact: (contact: Contact) => void;
}

