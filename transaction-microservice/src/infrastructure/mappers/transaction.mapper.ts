import { TransactionStatusModel } from "src/domain/model/transaction-status.model";
import { TransactionTypeModel } from "src/domain/model/transaction-type.model";
import { TransactionModel } from "src/domain/model/transaction.model";
import { CreateTransactionDto } from "../controllers/transaction/transaction.dto";
import { TransactionStatus } from "../entities/transaction-status.entity";
import { TransactionType } from "../entities/transaction-type.entity";
import { Transaction } from "../entities/transaction.entity";

export default class TransactionMapper{

    public static toTransactionModel(transaction: Transaction ): TransactionModel{
        const transactionModel: TransactionModel = new TransactionModel();
        transactionModel.id = transaction.id;
        transactionModel.externalId = transaction.externalId;
        transactionModel.accountExternalIdDebit = transaction.accountExternalIdDebit;
        transactionModel.accountExternalIdCredit = transaction.accountExternalIdCredit;
        transactionModel.typeId = transaction.type?.id;
        transactionModel.type = new TransactionTypeModel(transaction.type?.id, transaction.type?.description);
        transactionModel.value = transaction.value;
        transactionModel.statusId = transaction.status?.id;
        transactionModel.status = new TransactionStatusModel(transaction.status?.id, transaction.status?.description);
        transactionModel.createdAt = transaction.createdAt;
        transactionModel.updatedAt = transaction.updatedAt;
        return transactionModel;
    }

    public static toTransactionEntity(transactionModel: TransactionModel ): Transaction{
        console.log(transactionModel);
        const transaction: Transaction = new Transaction();
        transaction.id = transactionModel.id;
        transaction.externalId = transactionModel.externalId;
        transaction.accountExternalIdDebit = transactionModel.accountExternalIdDebit;
        transaction.accountExternalIdCredit = transactionModel.accountExternalIdCredit;
        transaction.type = {id: transactionModel.typeId}  as TransactionType;
        transaction.value = transactionModel.value;
        transaction.status = {id: transactionModel.statusId} as TransactionStatus;
        transaction.createdAt = transactionModel.createdAt;
        transaction.updatedAt = transactionModel.updatedAt;
        return transaction;
    }

    public static toTransactionModelFromDto(transaction: CreateTransactionDto): TransactionModel{
        const transactionModel: TransactionModel = new TransactionModel();
        transactionModel.externalId = transaction.accountExternalIdDebit; //check
        transactionModel.accountExternalIdDebit = transaction.accountExternalIdDebit;
        transactionModel.accountExternalIdCredit = transaction.accountExternalIdCredit;
        transactionModel.typeId = transaction.transferTypeId;
        transactionModel.value = transaction.value;
        return transactionModel;
    }
}